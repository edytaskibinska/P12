import styled from "styled-components";

const ContentStyled = styled.div`
  padding: 20px;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

function Content({ children }) {
  return <ContentStyled className="content">{children}</ContentStyled>;
}

export default Content;
