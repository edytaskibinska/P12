import styled from "styled-components";
import PropTypes from "prop-types";

const IconBlockStyled = styled.div.attrs((props) => ({
  color: props.color,
  padding: props.padding,
  margin: props.margin,
  dimensions: props.dimensions,
}))`
  background-color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border-radius: 6px;
  width:  ${(props) => props.dimensions};
  height:  ${(props) => props.dimensions};
  display: flex;
  justify-content: center;
  align-items: center;
`;

function IconBlock({ children, specialClass, color, padding, margin, dimensions }) {
  return (
    <IconBlockStyled
      className={`iconBlock ${specialClass && specialClass} `}
      color={color}
      padding={padding}
      margin={margin}
      dimensions={dimensions}
    >
      {children}
    </IconBlockStyled>
  );
}

IconBlock.propTypes = {
  children: PropTypes.node.isRequired,
  color:PropTypes.string,
  padding:PropTypes.string,
  margin:PropTypes.string,
  dimensions:PropTypes.string,
  specialClass:PropTypes.string,
};

export default IconBlock;
