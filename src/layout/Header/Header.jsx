import { Logo } from "../../assets";
import "./Header.scss";

function Header({ children }) {
  return (
    <header className="header">
      <a href="/">
        <Logo color="rgb(255, 1, 1);" />
      </a>
      {children}
    </header>
  );
}

export default Header;
