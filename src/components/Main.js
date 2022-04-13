import React from 'react';
import Styled from 'styled-components'; // css inside of js.


export default function Main(props) {
  return (
    <div>
        <h1>Main</h1>
        <li>{props.name}</li>
        <li>{props.role}</li>
        <Links>About</Links>
        <Links>Projects</Links>
        <Links>Contact</Links>
        </div>
  )
}

const Links = Styled.h2`
  color: #FFB703
`

