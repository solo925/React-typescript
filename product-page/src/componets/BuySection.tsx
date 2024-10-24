import React, { useState } from 'react';

type BuySectionProps = {
  price: number;
  mainImage: string;
  productName: string;
  description: string;
  colors: string[];
  sizes: number[];
};

const BuySection: React.FC<BuySectionProps> = ({ price, mainImage, productName, description, colors, sizes }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  return (
    <div className='main-buy-view'>
      <div>
        <img src={mainImage} alt=""  className='main-image'/>
      </div>
      <div>
      <h2>{productName}</h2>
      <p>{description}</p>

      <div>
        <p>Color:</p>
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color ${selectedColor === color ? 'selected' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>

      <div className='size-container'>
        
        <p>Size:</p>
        {sizes.map((size, index) => (
          <div
            key={index}
            className={`size ${selectedSize === size ? 'selected' : ''}`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </div>
          
        ))}
      </div>
        <div className='price-buton'>
        <button className="buy-button">Buy</button>
      <span className="price">Ksh.{price.toFixed(2)}</span>

    </div>
      </div>
    </div>
  );
};

export default BuySection;
