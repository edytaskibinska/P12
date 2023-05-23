import styled from "styled-components";
import PropTypes from "prop-types";
import styleSettings from "../../globalStyles/styleSettings";

const TitleStyled = styled.h1.attrs((props) => ({
  margin: props.margin,
}))`
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-style: normal;
  font-weight: 600;
  font-family: ${styleSettings.fontFamily.regular}, sans-serif;
  font-size: 48px;
  line-height: 142.6%;
`;

const TitleHello = styled.span.attrs((props) => ({
  welcomeColor: props.welcomeColor,
}))`
  color: ${(props) => props.welcomeColor};
`;

const TitleName = styled.span.attrs((props) => ({
  namecolor: props.namecolor,
}))`
  color: ${(props) => props.namecolor};
`;

function Title({ welcomeMessage, name, welcomeColor, namecolor, margin }) {
  return (
    <TitleStyled className="title" margin={margin}>
      <TitleHello welcomeColor={welcomeColor}>{welcomeMessage}</TitleHello>
      <TitleName namecolor={namecolor}>{name}</TitleName>
    </TitleStyled>
  );
}

Title.propTypes = {
  welcomeMessage: PropTypes.string.isRequired,
  name: PropTypes.string,
  welcomeColor: PropTypes.string,
  namecolor: PropTypes.string,
  margin: PropTypes.string,
};

export default Title;
