import styled from "styled-components";

const TitleStyled = styled.div`
  color: #ff0002;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 142.6%;
`;

function Title({ children }) {
  return <TitleStyled className="title">{children}</TitleStyled>;
}

export default Title;
