import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Form,
} from "react-bootstrap";
import "../App.css";
import { useEffect, useState } from "react";

function NavbarPrimary(props) {
  const [searchValue, getSearchValue] = useState("");

  const sendValue = async () => {
    if (searchValue.length > 2) {
      const query = await searchValue;
      props.searchValue(await query);
    }
  };
  const btnSend = document.getElementById("btnSend");
  const handleEnter = (event) => {
    console.log("ok");
    event.preventDefault();
    if (event.key === "Enter") {
      console.log("ENTER OK");
      btnSend.click();
    }
  };

  const [genreValue, setGenreValue] = useState(0);
  const genres = async (genreId) => {
    setGenreValue(genreId);
    const queryGenre = genreId;
    props.genreValue(await queryGenre);
    console.log({ queryGenre: queryGenre });
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="/">Nikzz Movie Search</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Genre" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="#action/3.1"
                onClick={() => genres(28)}
                active={genreValue === 28}
              >
                Action
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.2"
                onClick={() => genres(14)}
                active={genreValue === 14}
              >
                Fantasy
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.3"
                onClick={() => genres(10749)}
                active={genreValue === 10749}
              >
                Romance
              </NavDropdown.Item>
            </NavDropdown>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 border-1 border-black"
                aria-label="Search"
                onChange={({ target }) => getSearchValue(target.value)}
                onKeyUp={(event) => handleEnter(event)}
              />
              <Button
                variant="outline-success"
                onClick={() => sendValue()}
                id="btnSend"
              >
                Find
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPrimary;
