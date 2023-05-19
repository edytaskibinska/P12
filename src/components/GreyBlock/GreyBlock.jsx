import styled from "styled-components";

const GreyBlockStyled = styled.div`
  border-radius: 5px;
  background-color: #fbfbfb;
  padding: 25px;
`;


function GreyBlock({ children }) {
  return <GreyBlockStyled className="greyBlock">{children}</GreyBlockStyled>;
}

export default GreyBlock;
