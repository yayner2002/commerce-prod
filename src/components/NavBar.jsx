import logo from "/PITlogo.png";
import { NavLink } from "react-router-dom"
const NavBar = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
    fontSize: "15px",
  };
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "coral",
          alignItems: "center",
        }}
      >
        <div>
          <NavLink to="/">
            <img
              src={logo}
              alt=""
              style={{
                width: "80px",
                height: "70px",
                display: "block",
              }}
            />
          </NavLink>
        </div>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            listStyle: "none",
            gap: "0.5rem",
          }}
        >
          <li>
            <NavLink to="/products" style={linkStyle}>
              PRODUCTS
            </NavLink>
          </li>
          <li>
            <NavLink style={linkStyle} to="/services">
              SEVICES
            </NavLink>
          </li>
          <li>
            <NavLink style={linkStyle} to="/add-product">
              ADD PRODUCT
            </NavLink>
          </li>
          <li>
            <NavLink style={linkStyle} to="/login">
              LOGIN
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
