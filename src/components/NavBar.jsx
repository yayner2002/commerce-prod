import logo from "/PITlogo.png";
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
          <a href="/">
            <img
              src={logo}
              alt=""
              style={{
                width: "80px",
                height: "70px",
                display: "block",
              }}
            />
          </a>
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
            <a href="" style={linkStyle}>
              PRODUCTS
            </a>
          </li>
          <li>
            <a style={linkStyle} href="">
              SEVICES
            </a>
          </li>
          <li>
            <a style={linkStyle} href="">
              ADD PRODUCT
            </a>
          </li>
          <li>
            <a style={linkStyle} href="">
              LOGIN
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
