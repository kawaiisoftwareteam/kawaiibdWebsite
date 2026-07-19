import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollOnLoad = () => {
  const location = useLocation();

  useEffect(() => {
    // console.log("Navigated to:", location.pathname);
    
    // Get the scaled content container
    const scaledContent = document.querySelector('.scaled-content');
    
    // Reset both window and scaled container scroll positions
    if (scaledContent) {
      scaledContent.scrollTo({
        top: 0,
        behavior: 'instant'  // Use 'instant' instead of 'smooth' for immediate effect
      });
    }
    
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
    
  }, [location.pathname]);

  return null;
};

export default ScrollOnLoad;