import React from "react";

import styled from "styled-components";
import colors from "../../globalStyles/colorsIndex";

import { Text } from "../";

const RechartCustomTooltipStyled = styled.div`
  background-color: ${colors.main};
  padding: 10px;
  .tooltipLabel {
    line-height: 30px;
  }
`;

function RechartsCustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <RechartCustomTooltipStyled className="RechartCustomTooltipStyled">
        <Text
          fontSize="8px"
          color={colors.bgWhite}
          className="tooltipLabel"
        >{`${payload[1].value}kg`}</Text>
        <Text
          fontSize="8px"
          color={colors.bgWhite}
          className="tooltipLabel"
        >{`${payload[0].value}Kcal`}</Text>
      </RechartCustomTooltipStyled>
    );
  }

  return null;
}

export default RechartsCustomTooltip;
