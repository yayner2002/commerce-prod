import Product from "../components/Product";
import products from "../products";
import "./HomeScreen.css"

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <div className="card-list">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};
export default HomeScreen;
