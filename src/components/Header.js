import React from 'react';
// import Styled from 'styled-components'; // css inside of js.
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';



export default function NavDropdownExample() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="1" href="#/home">
          Matthew Rhoades
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item">
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" disabled>
          Projects
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Contact Me" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Email</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">LinkedIn</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}

// render(<NavDropdownExample />);













// export default function Header() {
//   return (
//     <NavBar>
//         <a href="#about"><NavItem>About</NavItem></a>
//         <a href="#projects"><NavItem>Projects</NavItem></a>
//         <a href="#contact"><NavItem>Contact</NavItem></a>
//     </NavBar>
//   )
// }

// const NavBar = Styled.div`
//     width: 100vw;
//     height: 30px;
//     background-color: #219EBC;
//     color: #00000;
//     position: fixed;
//     display: flex;
//     justify-content: flex-end;
//     border-bottom: 1px solid black;
//     `;
    
//     const NavItem = Styled.div`
//     padding-left: 50px;
//     padding-right: 3.8em;
//     font-size: 20px;
//     font-family: 'Permanent Marker', cursive;
//     color: #126782;

//     &:hover {
//         color: #023047;
//         font-size: 21px;
//     }
// `;
