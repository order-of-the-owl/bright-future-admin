'use client';

import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';
import { PropsWithChildren, useRef } from 'react';

const StyledComponentsRegistry = ({ children }: PropsWithChildren) => {
  const cache = useRef<ReturnType<typeof createCache> | undefined>(undefined);
  if (!cache.current) {
    cache.current = createCache();
  }

  useServerInsertedHTML(() => {
    const styles = extractStyle(cache.current!);
    return (
      <style 
        id="antd" 
        dangerouslySetInnerHTML={{ __html: styles }} 
      />
    );
  });

  return (
    <StyleProvider cache={cache.current!}>
      {children}
    </StyleProvider>
  );
};

export default StyledComponentsRegistry;