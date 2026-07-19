import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Get the scaled container
    const scaledContent = document.querySelector('.scaled-content');
    
    const handleScroll = () => {
      // Get both window and scaled container scroll positions
      const windowScroll = window.scrollY || document.documentElement.scrollTop;
      const scaledScroll = scaledContent ? scaledContent.scrollTop : 0;
      
      // Calculate actual scroll position considering the scale factor
      const scaleFactor = 0.8; // matches your CSS scale(0.8)
      const actualScroll = Math.max(windowScroll, scaledScroll) / scaleFactor;
      
      // console.log({
      //   windowScroll,
      //   scaledScroll,
      //   actualScroll,
      // });

      setIsVisible(actualScroll > 600);
    };

    // Add scroll listeners to both window and scaled container
    window.addEventListener('scroll', handleScroll, { passive: true });
    if (scaledContent) {
      scaledContent.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Check initial position
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scaledContent) {
        scaledContent.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollToTop = () => {
    // Handle both window and scaled container
    const scaledContent = document.querySelector('.scaled-content');
    
    if (scaledContent) {
      scaledContent.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1000,
        transform: 'scale(1.25)',
        transformOrigin: 'bottom right',
        transition: 'opacity 0.3s ease',
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        style={{
          backgroundColor: '#BE1E2D',
          border: '2px solid white',
          color: 'white',
          padding: '10px 10px',
          fontSize: '16px',
          borderRadius: '25px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease, transform 0.3s ease',
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#ffffff" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
      </button>
    </div>
  );
};

export default ScrollToTop;