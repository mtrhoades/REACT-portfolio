import React from 'react';
import styled from 'styled-components'; // css inside of js.

export default function Header() {
  return (
    <NavBar>
        <NavItem>About</NavItem>
        <NavItem>Projects</NavItem>
        <NavItem>Contact</NavItem>
    </NavBar>
  )
}

const NavBar = styled.div`
    background-color: #cecece;
    color: #00000;
    position: fixed;
    width: 100vw;
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid black;
    `;

const NavItem = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    font-size: 20px;
    font-family: sans-serif;

    &:hover {
        color: #f48322;
    }
`;
