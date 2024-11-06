import ProductList from "./components/ProductList";
import products from "./products";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <h1>All Products</h1>
      <ProductList products={products} />
    </>
  );
};

export default App;
