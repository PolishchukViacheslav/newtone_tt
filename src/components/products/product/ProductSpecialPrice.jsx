import React from 'react';
import PropTypes from 'prop-types';

export const ProductSpecialPrice = ({ terms, unit }) => (
  <span className="product__special_price">
    {`special price ${terms.price}$/${terms.weight}${unit}`}
  </span>
);

ProductSpecialPrice.propTypes = {
  unit: PropTypes.string.isRequired,
  terms: PropTypes.shape({
    price: PropTypes.number,
    weight: PropTypes.number,
  }).isRequired,
};
