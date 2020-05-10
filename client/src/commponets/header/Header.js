import React from "react";
const style = {backgroundColor:'#38bfa1'}

function Header() {
  return (
    <nav>
      <div class="nav-wrapper" style={style}>
        <a href="#" class="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="#">
              <i class="large material-icons">person</i>
            </a>
          </li>
          <li>
          [my_pts]
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
