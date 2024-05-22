// src/components/CustomCursor.js
import React, { useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    const cursorInner = document.querySelector('.custom-cursor-inner');
    const links = document.querySelectorAll('.header .nav-links a');

    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursorInner.style.left = `${e.clientX}px`;
      cursorInner.style.top = `${e.clientY}px`;
    });

    const resetCursor = () => {
      cursor.classList.remove('custom-cursor-hover');
    };

    links.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        cursor.classList.add('custom-cursor-hover');
      });
      link.addEventListener('mouseleave', resetCursor);
      link.addEventListener('click', resetCursor);
    });

    return () => {
      document.removeEventListener('mousemove', () => {});
      links.forEach((link) => {
        link.removeEventListener('mouseenter', () => {});
        link.removeEventListener('mouseleave', resetCursor);
        link.removeEventListener('click', resetCursor);
      });
    };
  }, []);

  return (
    <>
      <div className="custom-cursor"></div>
      <div className="custom-cursor-inner"></div>
    </>
  );
};

export default CustomCursor;
