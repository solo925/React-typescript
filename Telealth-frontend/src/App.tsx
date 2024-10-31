import React from 'react';
import images from './assets';
import BuySection from './componets/BuySection';
import ProductImage from './componets/ProductImage';
import ProductInfo from './componets/ProductInfo';

import './App.css';

const App: React.FC = () => {
  const product = {
    name: 'Black  Amazing Shoes',
    description: 'Product description: \
    sports, white black,nike,extra lightweight',
    
    price: 4500.95,
    mainImage: images.ProductImage, // Placeholder image
    colors: ['#000000', '#FF5733', '#FFC300', '#DAF7A6'],
    sizes: [40, 41, 42, 43, 44, 45],
  };

  return (
    <div className="app">
      <div className="product-page">
        <ProductImage mainImage={product.mainImage} />
      </div>
      <div className="product-info">
        <ProductInfo
          productName={product.name}
          description={product.description}
          colors={product.colors}
          sizes={product.sizes}
          price={product.price}
        />
      </div>
      <div className='buy-section'>
        <BuySection
          mainImage={product.mainImage}
          productName={product.name}
          description={product.description}
          colors={product.colors}
          sizes={product.sizes}
          price={product.price}

        />
      </div>
    </div>
  );
};

export default App;
