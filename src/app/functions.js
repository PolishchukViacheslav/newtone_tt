/**
 *
 * @param {Array} purchases array of objects. Reduce only regular price without any specials
 */
export const onlyRegularPriceReducer = (purchases) => {
  const total = purchases.reduce((subTotal, product) => {
    const { cartWeight, price } = product;

    return subTotal + (cartWeight * price);
  }, 0);

  return total;
};

/**
 *
 * @param {Array} purchases array of objects. Reduce price with all conditions
 */
export const priceReducer = (purchases) => {
  const total = purchases.reduce((subTotal, product) => {
    if (Object.prototype.hasOwnProperty.call(product, 'specialPrice')) {
      const { specialPrice, cartWeight, price } = product;
      if ((cartWeight / specialPrice.weight) >= 1) {
        const specialPriceQuantity = Math.floor(cartWeight / specialPrice.weight);
        const regularPriceQuantity = cartWeight
        % (specialPriceQuantity * specialPrice.weight);
        const productTotalCost = (specialPriceQuantity * specialPrice.price)
        + (regularPriceQuantity * price);

        return subTotal + productTotalCost;
      }
      return subTotal + (cartWeight * price);
    }
    return subTotal + (product.cartWeight * product.price);
  }, 0);
  return total;
};
