import Product from "../components/Product";
import products from "../products";

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <div style={{
        display: "flex",
        gap: "0.5rem",
        marginTop: "2rem",
        flexWrap: "wrap"
      }}>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};
export default HomeScreen;
