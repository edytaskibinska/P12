import styled from "styled-components";
import PropTypes from 'prop-types';

const BlockStyled = styled.div.attrs((props) => ({
  color: props.color,
  padding: props.padding,
  margin: props.margin,
}))`
  border-radius: 5px;
  background-color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};

  &.grid3to1 {
    border: 2px solid blue;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    & > * {
      &:first-child {
        border: 2px solid yellow;

        flex: 70%;
        margin-left: 0;
      }
      &:nth-child(2) {
        border: 2px solid orange;

        flex: 30%;
        margin-right: 0;
      }
    }
  }
  &.grid3to3 {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    & > * {
      flex: 30%;
    }
  }
`;

function Block({
  children,
  color,
  padding,
  margin,
  grid3to1,
  grid3to3,
  specialClass,
}) {
  return (
    <BlockStyled
      className={`block ${grid3to1 && "grid3to1"} ${grid3to3 && "grid3to3"} ${
        specialClass && specialClass
      } `}
      color={color}
      padding={padding}
      margin={margin}
    >
      {children}
    </BlockStyled>
  );
}

Block.propTypes = {
  children:PropTypes.node.isRequired,
  color:PropTypes.string,
  padding:PropTypes.string,
  margin:PropTypes.string,
  grid3to1:PropTypes.string,
  grid3to3:PropTypes.string,
  specialClass:PropTypes.string,
}


export default Block;
