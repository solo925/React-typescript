import React from 'react';

type ProductImageProps = {
  mainImage: string;
};

const ProductImage: React.FC<ProductImageProps> = ({ mainImage }) => {
  return (
    <div className='image-container'>
      <img src={mainImage} alt="Main Product" className="main-image" />
    </div>
  );
};

export default ProductImage;
