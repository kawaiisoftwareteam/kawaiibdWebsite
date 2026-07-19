import React from 'react';

const LoadingSpinner = () => {
  return (
    <div 
      className="fixed z-50 flex items-center justify-center" 
      style={{ 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%) scale(1.25)',
        width: '100vw',
        height: '100vh',
        background: 'rgba(255, 255, 255, 0.8)'
      }}
    >
      <div className="flex flex-col items-center">
        <div 
          className="w-16 h-16 border-4 border-l-transparent rounded-full animate-spin"
          style={{ 
            borderTopColor: '#BE1E2D',
            borderRightColor: '#BE1E2D',
            borderBottomColor: '#BE1E2D'
          }}
        ></div>
        <p className="mt-4 text-lg font-medium" style={{ color: '#BE1E2D' }}>
          Loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;