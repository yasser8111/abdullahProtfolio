import React from 'react';

function GlassBox({ children, className = "" }) {
  return (
    <div className={`glass-border relative rounded-2xl backdrop-blur-md border-l-2 border-t border-white/30 shadow-xl ${className}`}>
      <div className="absolute inset-0 bg-transparent pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default GlassBox;