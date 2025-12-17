import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
}

const Image: React.FC<ImageProps> = ({ alt, className, loading = "lazy", ...props }) => {
  return (
    <img 
      alt={alt} 
      className={`transition-opacity duration-300 ${className}`}
      loading={loading}
      {...props} 
    />
  );
};

export default Image;

