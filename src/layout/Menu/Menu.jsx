import { NavLink } from "react-router-dom";
import "./Menu.scss";

function Menu({ menuArray }) {
  return (
    <ul className="menu">
      {menuArray.map((item, index) => {
        return (
          <li key={index}>
            <NavLink className="navLink" index={item.index} to={item.url}>
              {item.linkName}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default Menu;
