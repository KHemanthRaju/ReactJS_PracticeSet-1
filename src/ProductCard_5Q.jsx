const ProductCard = ({ products }) => {
  return (
    <>
      <h2>Product Card</h2>
      <ul>
        {products.map((product) => (
          <li>{product.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ProductCard;
