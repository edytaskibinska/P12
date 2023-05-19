import { Logo } from "../../assets";
import styled from "styled-components";

const HeaderStyled = styled.header`
  padding: 20px 30px;
  display: flex;
  background-color: black;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

function Header({ children }) {
  return (
    <HeaderStyled className="header">
      <a href="/">
        <Logo color="rgb(255, 1, 1);" />
      </a>
      {children}
    </HeaderStyled>
  );
}

export default Header;
