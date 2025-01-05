import React from 'react';

interface BackgroundProps {
  children: React.ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  return (
    <div className="relative min-h-screen">
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'rgba(10, 15, 24, 0.95)'
        }}
      />
      <div className="relative" style={{ zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}