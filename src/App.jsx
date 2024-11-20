import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import { Route, Routes } from "react-router-dom";
import Services from "./screens/Services";
import ProductAddForm from "./components/ProductAddForm";
import Login from "./screens/Login";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products" element={<HomeScreen />} />
        <Route path="/services" element={<Services />} />
        <Route path="/add-product" element ={<ProductAddForm />}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
