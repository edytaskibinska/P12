import logo from "../../assets/images/logo.png";
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
       <img src={logo} alt="" className="logo" />
      </a>
      {children}
    </HeaderStyled>
  );
}

export default Header;
