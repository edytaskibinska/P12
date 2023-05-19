import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuStyled = styled.ul`
  display: flex;
  .navLink {
    color: white;
    padding: 20px;
    font-size: 24px;
    text-decoration: none;
    font-family: "Roboto";
    &.active {
      text-decoration: underline;
    }
  }
  @media all and (max-width: 1040px) {
    .navLink {
      font-size: 18px;
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
