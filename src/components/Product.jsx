/* eslint-disable react/prop-types */
const Product = ({ product }) => {
  return (
    <>
     <div
      style={{
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        maxWidth: "300px",
        margin: "auto",
        textAlign: "center",
        fontFamily: "arial",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <a href="">
        <img
          src={product.image}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </a>
      <h3 style={{ fontSize: "14px" }}>{product.name}</h3>
      <p>{product.price} $</p>
    </div>
    </>
  );
};

export default Product;
