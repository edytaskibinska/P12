import styled from "styled-components";
import PropTypes from "prop-types";
import styleSettings from "../../globalStyles/styleSettings";

const TextStyled = styled.p.attrs((props) => ({
  margin: props.margin,
  color: props.color,
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
}))`
  color: ${(props) => props.color};
  font-style: normal;
  font-weight: ${(props) => props.fontWeight};
  font-family: ${styleSettings.fontFamily.regular}, sans-serif;
  font-size: ${(props) => props.fontSize};
  line-height: 142.6%;
  margin: ${(props) => props.margin};
`;

function Text({ children, color, margin, fontSize, fontWeight, className }) {
  return (
    <TextStyled
      className={`Text ${className}`}
      color={color}
      margin={margin}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {children}
    </TextStyled>
  );
}

Text.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  margin: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  classNam: PropTypes.string,
};

export default Text;
