import React from 'react';

export default function TerminalBackground() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{
        background: 'rgba(10, 15, 24, 0.95)',
        backgroundImage: `
          linear-gradient(
            0deg,
            rgba(0, 255, 65, 0.03) 1px,
            transparent 1px
          )
        `,
        backgroundSize: '100% 2px'
      }}
    />
  );
}