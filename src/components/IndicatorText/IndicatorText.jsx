import styled from "styled-components";
import PropTypes from "prop-types";
import { Text } from "../";
import colors from "../../globalStyles/colorsIndex";
const IndicatorTextStyled = styled.div`
  .indText {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: ${colors.blackBg}
  }
  .indDesc {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${colors.graphitBg}
  }
`;

function IndicatorText({
  indicatorColor,
  descriptionColor,
  padding,
  margin,
  indicatorvalue,
  description,
}) {
  return (
    <IndicatorTextStyled
      className={`indicatorText`}
      indicatorColor={indicatorColor}
      descriptionColor={descriptionColor}
      padding={padding}
      margin={margin}
      indicatorvalue={indicatorvalue}
      description={description}
    >
      <Text className="indText" color={indicatorColor}>
        {indicatorvalue}
      </Text>
      <Text className="indDesc" color={descriptionColor}>
        {description}
      </Text>
    </IndicatorTextStyled>
  );
}

IndicatorText.propTypes = {
  indicatorColor: PropTypes.string,
  descriptionColor: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  indicatorvalue: PropTypes.string, //ou number ?? TODO verifier
  description: PropTypes.string,
};

export default IndicatorText;
