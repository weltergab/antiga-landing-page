import React, { useState } from 'react';

type Props = {
  imageSrc: string;
};

const ImageComponent: React.FC<Props> = ({ imageSrc }) => {
  const [isImageClicked, setIsImageClicked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleImageClick = () => {
    setIsImageClicked(!isImageClicked);
    setIsExpanded(true);
  };

  const handleExpandedImageClick = () => {
    setIsExpanded(false);
  };

  return (
    <div className="relative max-w-full max-h-full mx-auto">
      <div className="aspect-w-1 aspect-h-1 border border-black">
        <img
          src={imageSrc}
          alt="imagem"
          onClick={handleImageClick}
          className="w-full h-full object-cover"
        />
      </div>
      {isExpanded && (
        <div
          className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center"
          onClick={handleExpandedImageClick}
        >
          <img
            src={imageSrc}
            alt="imagem ampliada"
            className="max-w-screen max-h-screen object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default ImageComponent;
