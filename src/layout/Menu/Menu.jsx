import { NavLink } from "react-router-dom";
import styled from "styled-components";

import styleSettings from "../../globalStyles/styleSettings";

const MenuStyled = styled.ul`
  display: flex;
  .navLink {
    color: white;
    padding: 20px;
    font-size: 22px;
    text-decoration: none;
    font-family: ${styleSettings.fontFamily.regular}, sans-serif;
    &.active {
      text-decoration: underline;
    }
  }
  @media all and (max-width: 1024px) {
    .navLink {
      font-size: 24px;
    }
  }
  @media all and (max-width: 750px) {
    .navLink {
      font-size: 12px;
    }
  }
`;

function Menu({ menuArray }) {
  return (
    <MenuStyled className="menu">
      {menuArray.map((item, index) => {
        return (
          <li key={index}>
            <NavLink className="navLink" index={item.index} to={item.url}>
              {item.linkName}
            </NavLink>
          </li>
        );
      })}
    </MenuStyled>
  );
}

export default Menu;
