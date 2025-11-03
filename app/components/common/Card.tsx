// components/ui/Card.tsx
'use client';
import { ReactNode } from 'react';

export default function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`
        bg-white 
        rounded-2xl 
        shadow-md 
        border border-gray-100 
        p-6 
        flex flex-col 
        justify-between 
        h-full 
        hover:shadow-lg 
        transition-all 
        ${className}
      `}
    >
      {children}
    </div>
  );
}
