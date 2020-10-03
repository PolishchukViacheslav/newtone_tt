import React from 'react';
import PropTypes from 'prop-types';
import './Product.scss';
import { WeightQuantity } from './WeightQuantity';
import { ProductSpecialPrice } from './ProductSpecialPrice';

export const Product = (props) => {
  const { data: product } = props;
  const capitalizedName = product.name.replace(/^./, product.name[0].toUpperCase());
  return (
    <li className="product">
      <img src={product.img} alt="product foto" className="product__foto" />
      <div className="product__description">
        <div className="product__title_area">
          <h2 className="product__title">{capitalizedName}</h2>
          <h5 className="product__weight_units">{product.per}</h5>
        </div>
        {product.specialPrice
        && (
        <ProductSpecialPrice
          terms={product.specialPrice}
          unit={product.per}
        />
        )}
        <div className="product__footer">
          <div className="product__price">{product.price}</div>
          <WeightQuantity unit={product.per} name={product.name} />
        </div>
      </div>
    </li>
  );
};
Product.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    per: PropTypes.string,
    specialPrice: PropTypes.shape({
      price: PropTypes.number,
      weight: PropTypes.number,
    }),
  }).isRequired,
};
