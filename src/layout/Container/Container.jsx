import styled from "styled-components";

const ContainerStyled = styled.div`
  box-sizing: border-box;
  display: flex;
`;

function Container({ children }) {
  return <ContainerStyled className="container">{children}</ContainerStyled>;
}

export default Container;
