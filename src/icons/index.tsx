import React from 'react';

// SVG Ikon untuk ScrollToTop (panah ke atas)
export const UpArrowIcon: React.FC<{size?: number, color?: string}> = ({
  size = 30,
  color = 'currentColor'
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={color}
    >
      <path d="M12 4l-8 8h5v8h6v-8h5z" />
    </svg>
  );
};

// SVG Ikon untuk tombol Close (X)
export const CloseIcon: React.FC<{size?: number, color?: string}> = ({
  size = 30,
  color = 'currentColor'
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={color}
    >
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
  );
}; 