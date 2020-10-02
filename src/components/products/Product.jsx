import React from 'react';
import PropTypes from 'prop-types';
import './Product.scss';

export const Product = (props) => {
  const { item: product } = props;
  return (
    <li className="product">
      jfg
    </li>
  );
};
Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,

  }).isRequired,
}