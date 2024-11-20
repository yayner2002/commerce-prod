/* eslint-disable react/prop-types */
const Product = ({ product }) => {
  return (
    <>
      <div key={product._id}>
        <a href="/">
          <img src={`${product.image}`} alt="product image" />
          <p>{product.description}</p>
          <p>{product.price}</p>
        </a>
      </div>
    </>
  );
};

export default Product;
