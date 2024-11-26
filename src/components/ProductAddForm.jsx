const ProductAddForm = () => {
  // create a piece of State for storing all products

  // create a piece of State for the current product details

  // Handle input change and update product state
  const handleInputChange = (e) => {};
  // Function to handle adding a new product

  const addProduct = (e) => {
    e.preventDefault();

    // Add new product to the list
    // Reset form fields
  };
  return (
    <>
      {" "}
      <div>
        <h2>Add Product</h2>
        <form>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <textarea
              name="description"
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
              placeholder="Product Price"
              style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="text"
              name="brand"
              placeholder="Product Brand"
              style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="text"
              name="imageURL"
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
