import styled from "styled-components";
import PropTypes from "prop-types";

const BlockStyled = styled.div.attrs((props) => ({
  color: props.color,
  padding: props.padding,
  margin: props.margin,
  overflow: props.overflow,
}))`
  border-radius: 5px;
  background-color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  overflow: ${(props) => props.overflow};

  &.grid3to1 {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    & > * {
      &:first-child {
        flex: 70%;
        margin-left: 0;
      }
      &:nth-child(2) {
        flex: 30%;
        margin-right: 0;
      }
    }
  }

  &.grid1to3 {
    display: flex;
    justify-content: center;
    align-items: center;
    & > * {
      &:first-child {
        margin-right: 20px;
      }
      &:nth-child(2) {
        flex: 70%;
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
  overflow,
  grid3to1,
  grid1to3,
  grid3to3,
  specialClass,
}) {
  return (
    <BlockStyled
      className={`block ${grid3to1 && "grid3to1"} ${grid1to3 && "grid1to3"} ${
        grid3to3 && "grid3to3"
      } ${specialClass && specialClass} `}
      color={color}
      padding={padding}
      margin={margin}
      overflow={overflow}
    >
      {children}
    </BlockStyled>
  );
}

Block.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  overflow: PropTypes.string,
  grid3to1: PropTypes.bool,
  grid1to3: PropTypes.bool,
  grid3to3: PropTypes.bool,
  specialClass: PropTypes.string,
};

export default Block;
