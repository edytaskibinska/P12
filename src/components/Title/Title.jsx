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
  nameColor: props.nameColor,
}))`
  color: ${(props) => props.nameColor};
`;

function Title({ welcomeMessage, name, welcomeColor, nameColor, margin }) {
  return (
    <TitleStyled className="title" margin={margin}>
      <TitleHello welcomeColor={welcomeColor}>{welcomeMessage}</TitleHello>
      <TitleName nameColor={nameColor}>{name}</TitleName>
    </TitleStyled>
  );
}

Title.propTypes = {
  welcomeMessage: PropTypes.string.isRequired,
  name: PropTypes.string,
  welcomeColor: PropTypes.string,
  nameColor: PropTypes.string,
  margin: PropTypes.string,
};

export default Title;
