import styled from "styled-components";

const AsideStyled = styled.aside`
  background-color: black;
  box-sizing: border-box;
`;

function Aside({ children }) {
  return <AsideStyled className="aside">{children}</AsideStyled>;
}

export default Aside;
