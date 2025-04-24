import React, { useEffect } from 'react';
import { CloseIcon } from '../icons';
import '../styles/imageViewer.css';

interface ImageViewerProps {
  isOpen: boolean;
  src: string;
  alt?: string;
  onClose: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ isOpen, src, alt = 'Full image', onClose }) => {
  // Handle ESC key to close
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      // Add class to body to prevent scrolling
      document.body.classList.add('image-viewer-open');
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.classList.remove('image-viewer-open');
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="image-viewer-overlay" 
      onClick={onClose}
      data-testid="image-viewer"
    >
      <button 
        className="image-viewer-close-button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close image viewer"
      >
        <CloseIcon color="white" />
      </button>
      
      <img 
        src={src} 
        alt={alt} 
        className="image-viewer-image"
        onClick={(e) => e.stopPropagation()} 
      />
    </div>
  );
};

export default ImageViewer; 