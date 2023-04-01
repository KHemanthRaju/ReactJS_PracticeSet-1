const ProductDetailsCard = ({ products }) => {
  return (
    <>
      <h2>Product Details Card</h2>
      <ul>
        {/* {products
          .filter((product) => product.sales > product.quantity)
          .map(({ name, quantity, sales }) => (
            <li>
              Name:{name} Quantity:{quantity} Sales:{sales}
            </li>
          ))} */}
        {/* {products.map(({ name, quantity, sales }) => (
          <li>
            Name:{name} Quantity:{quantity} Sales:{sales}
          </li>
        ))} */}
        {products
          .reduce((acc, curr) => {
            return curr.sales > curr.quantity ? [...acc, curr] : acc;
          }, [])
          .map((product) => (
            <li>
              Name: {product.name} Quantity:{product.quantity} Sales:
              {product.sales}
            </li>
          ))}
      </ul>
    </>
  );
};

export default ProductDetailsCard;
