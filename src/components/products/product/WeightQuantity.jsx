import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './WeightQuantity.scss';
import { useDispatch, useSelector } from 'react-redux';
import { delProduct, selectPurchases, setPurchases } from '../../cart/CartSlice';

export const WeightQuantity = ({ name, unit }) => {
  const initWeight = useSelector(selectPurchases)[name] || 0;
  const [quantity, setQuantity] = useState(initWeight);
  const dispatch = useDispatch();

  const handleIncrementWeight = () => {
    const upDatedQuantity = Number(quantity) + 1;
    if (upDatedQuantity > 99) {
      return;
    }
    setQuantity(upDatedQuantity);
    dispatch(setPurchases({ [name]: upDatedQuantity }));
  };

  const handleDecrementWeight = () => {
    if (quantity === 0) {
      // dispatch(delProduct(name));
      return;
    }

    const upDatedQuantity = Number(quantity) - 1;
    if (upDatedQuantity === 0) {
      dispatch(delProduct(name));
      setQuantity(upDatedQuantity);
      return;
    }

    setQuantity(upDatedQuantity);
    dispatch(setPurchases({ [name]: upDatedQuantity }));
  };

  const handleWeightChanges = ({ target: { value } }) => {
    const validationPattern = /^0+|\D$/;
    const validInput = value.replace(validationPattern, '');

    if (validInput.length > 2) {
      return;
    }
    setQuantity(Number(validInput));
    dispatch(setPurchases({ [name]: Number(validInput) }));
  };

  const handleInputBlur = () => {
    if (quantity === '') {
      setQuantity(0);
      dispatch(delProduct(name));
    }
  };

  const handleInputClick = () => {
    if (!quantity) {
      setQuantity('');
    }
  };

  return (
    <div className="product__button weight_quantity">
      <span
        className="weight_quantity__minus"
        role="presentation"
        onClick={handleDecrementWeight}
      >
        -
      </span>
      <span className="weight_quantity__quantity_field">
        <input
          type="text"
          className="weight_quantity__input"
          value={quantity}
          onChange={handleWeightChanges}
          onBlur={handleInputBlur}
          onClick={handleInputClick}
        />
        <span className="weight_quantity__unit">{unit}</span>
      </span>
      <span
        className="weight_quantity__plus"
        role="presentation"
        onClick={handleIncrementWeight}
      >
        +
      </span>
    </div>
  );
};

WeightQuantity.propTypes = {
  unit: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
