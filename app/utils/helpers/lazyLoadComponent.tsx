import dynamic from 'next/dynamic';
import { Spin } from 'antd';
import React from 'react';

type ComponentType<T = any> = React.ComponentType<T>;

export const lazyLoadComponent = <T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  type: 'chart' | 'table' | 'default' = 'default'
): T => {
  const loadingTip =
    type === 'chart'
      ? 'Loading chart...'
      : type === 'table'
      ? 'Loading table...'
      : 'Loading...';

  return dynamic(importFn as any, {
    ssr: false,
    loading: () => (
      <div className="flex justify-center items-center h-64">
        <Spin size="large" tip={loadingTip} />
      </div>
    ),
  }) as unknown as T;
};
