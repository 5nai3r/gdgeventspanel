import React from 'react';
import './Header.css';


const Header = (props) =>
    <header className="header">
      <img src={props.image} />
      <h1>{props.title}</h1>
    </header>


export default Header
