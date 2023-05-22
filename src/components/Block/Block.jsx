import styled from "styled-components";
import colors from "../../globalStyles/colorsIndex";


const BlockStyled = styled.div.attrs(props => ({
  color:  props.color ,
}))`
border-radius: 5px;
background-color: ${props => props.color};
padding: 25px;
`;



function Block({ children, color }) {

  return <BlockStyled className="block" color={color}>{children}</BlockStyled>;
}

export default Block;
