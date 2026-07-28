'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScrollOnLoad = () => {
  const pathname = usePathname();

  useEffect(() => {
    const scaledContent = document.querySelector('.scaled-content');

    if (scaledContent) {
      scaledContent.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    }

    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });

  }, [pathname]);

  return null;
};

export default ScrollOnLoad;