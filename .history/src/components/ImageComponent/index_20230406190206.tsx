import React, { useState } from 'react';

type Props = {
  imageSrc: string;
};

const ImageComponent: React.FC<Props> = ({ imageSrc }) => {
  const [isImageClicked, setIsImageClicked] = useState(false);

  const handleImageClick = () => {
    setIsImageClicked(!isImageClicked);
  };

  return (
    <div className="relative max-w-full max-h-full mx-auto">
      <div className="relative max-w-full max-h-full mx-auto">
        <img
          src={imageSrc}
          alt="imagem"
          onClick={handleImageClick}
          className="max-w-80 max-h-80"
        />
      </div>
      {isImageClicked && (
        <img
          src={imageSrc}
          alt="imagem ampliada"
          onClick={handleImageClick}
          className="max-w-80 max-h-80 fixed top-0 left-0 w-full h-full object-scale-down z-50 cursor-pointer"
        />
      )}
    </div>
  );
};

export default ImageComponent;