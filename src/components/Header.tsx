import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
            {/* <div className="cart">
              <span>
                <img src="/images.png" style={{ width: "60px" }} />
              </span>
              <span></span>
            </div> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
