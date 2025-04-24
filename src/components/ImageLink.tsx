import React, { useState } from 'react';
import ImageViewer from './ImageViewer';

interface ImageLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  alt?: string;
}

/**
 * Komponen untuk membungkus gambar agar bisa diklik dan ditampilkan dalam ukuran penuh
 * 
 * @param href - URL gambar yang akan ditampilkan dalam ukuran penuh
 * @param children - Konten yang dibungkus (biasanya thumbnail gambar)
 * @param className - Class tambahan untuk elemen a
 * @param alt - Alt text untuk gambar dalam viewer
 */
const ImageLink: React.FC<ImageLinkProps> = ({ 
  href, 
  children, 
  className = '',
  alt = 'Full image'
}) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openViewer = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsViewerOpen(true);
  };

  const closeViewer = () => {
    setIsViewerOpen(false);
  };

  return (
    <>
      <a 
        href={href} 
        className={`image-link ${className}`} 
        onClick={openViewer}
        data-testid="image-link"
        aria-label="View full image"
      >
        {children}
      </a>
      
      <ImageViewer 
        isOpen={isViewerOpen} 
        src={href} 
        alt={alt}
        onClose={closeViewer} 
      />
    </>
  );
};

export default ImageLink; 