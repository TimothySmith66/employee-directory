import React from "react";
import "./Header.css"

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

function Header() {
  return (
    <div class="header">
  <h1> Employee Directory </h1>
  <p> search for your Employee here.</p>
</div>
  );
}

export default Header;