import { useState } from "react";

const ProductAddForm = () => {
  // create a piece of State for storing all products initial state is empty array
  const [products, setProducts] = useState([]);
  // create a piece of State for the current product details
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    brand: "",
    imageURL: "",
  });

  // Handle input change and update product state
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setProduct({ ...product, [name]: value });
  };
  // Function to handle adding a new product

  const addProduct = (e) => {
    e.preventDefault();
    console.log("Form Has Been Submited.");
    // Add new product to the list
    setProducts([ ...products, product])
    setProduct({
      name: "",
      description: "",
      price: "",
      brand: "",
      imageURL: "",
    })

    // Reset form fields

  };
  return (
    <>
      {" "}
      <div>
        <h2>Add Product</h2>
        <form onSubmit={addProduct}>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="text"
              value={product.name}
              name="name"
              onChange={handleInputChange}
              placeholder="Product Name"
              style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <textarea
              name="description"
              value={product.description}
              onChange={handleInputChange}
              placeholder="Product Description"
              style={{
                padding: "10px",
                width: "300px",
                marginBottom: "10px",
                height: "60px",
              }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              placeholder="Product Price"
              style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="text"
              name="brand"
              value={product.brand}
              onChange={handleInputChange}
              placeholder="Product Brand"
              style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="text"
              name="imageURL"
              value={product.imageURL}
              onChange={handleInputChange}
              placeholder="Image URL"
              style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
            />
          </div>
          <button type="submit" style={{ padding: "10px 20px" }}>
            Add Product
          </button>
        </form>
      </div>
      <div>
        <h2>Product List</h2>
        <ul>
          {products.map((product, index) => (
            <li key={index} style={{ marginBottom: "20px" }}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Brand: {product.brand}</p>
              <img
                src={product.imageURL}
                alt={product.name}
                style={{ width: "150px" }}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductAddForm;
