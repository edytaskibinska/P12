import React from "react";

import styled from "styled-components";
import colors from "../../globalStyles/colorsIndex";

import { Text } from "../";

const RechartsCustomLineTooltipStyled = styled.div`
  background-color: ${colors.bgWhite}!important;
  padding: 10px;
  position: absolute;
  left: 5px;
  top: calc(50% - 20px);
`;

function RechartsCustomLineTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    console.log("payload", payload);
    console.log("payload[0].payload.id", payload[0].payload.id);
    return (
      <RechartsCustomLineTooltipStyled className="RechartsCustomLineTooltip">
        <Text fontSize="8px" color={colors.graphitBg} className="tooltipLabel">
          {`${payload[0]?.payload?.sessionLength} min`}
        </Text>
      </RechartsCustomLineTooltipStyled>
    );
  }

  return null;
}

export default RechartsCustomLineTooltip;
