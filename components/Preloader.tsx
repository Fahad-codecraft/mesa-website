'use client'
import React, { useEffect } from 'react';


const Preloader = () => {
  useEffect(() => {
    const handleLoad = () => {
      const loader = document.querySelector(".loader-wrapper");
      if (loader) {
        loader.classList.add("disappear");
      }
    };
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <div className="loaderWrapper">
      <div className="loader">
        <img src="/logo copy.webp" alt="Logo" />
      </div>
    </div>
  );
};

export default Preloader;
