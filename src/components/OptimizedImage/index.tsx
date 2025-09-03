import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  style = {},
  loading = 'lazy',
  placeholder,
  onLoad,
  onError
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = new Image();
    
    img.onload = () => {
      setImageLoaded(true);
      onLoad?.();
    };
    
    img.onerror = () => {
      setImageError(true);
      onError?.();
    };
    
    img.src = src;
  }, [src, onLoad, onError]);

  return (
    <div 
      className={`optimized-image-container ${className}`}
      style={{ position: 'relative', ...style }}
    >
      {/* Placeholder or loading state */}
      {!imageLoaded && !imageError && (
        <div 
          className="optimized-image-placeholder"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#383232ff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#faf7f7ff',
            fontSize: '14px'
          }}
        >
          {placeholder || 'Loading...'}
        </div>
      )}
      
      {/* Error state */}
      {imageError && (
        <div 
          className="optimized-image-error"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#999',
            fontSize: '14px'
          }}
        >
          Failed to load
        </div>
      )}
      
      {/* Actual image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={loading}
        className={`optimized-image ${imageLoaded ? 'optimized-image--loaded' : ''}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: imageLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          transform: 'translate3d(0, 0, 0)' // Hardware acceleration
        }}
      />
    </div>
  );
};

export default OptimizedImage;
