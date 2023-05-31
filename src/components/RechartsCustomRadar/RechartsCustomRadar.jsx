import React from "react";
import { useState } from "react";
import { GetUserActivityPerformance } from "../../services/GetData";
import { Loader } from "../../components";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import colors from "../../globalStyles/colorsIndex";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const RechartsCustomRadarStyled = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 160px;
  position: relative;
  .radiusAxis,
  .recharts-polar-radius-axis-ticks {
    display: none;
  }
`;

function RechartsCustomRadar() {
  let { userId } = useParams();
  const [data, setData] = useState(null);

  const dataExist = (data || data?.id) != null;
  return (
    <>
      <GetUserActivityPerformance setData={setData} userId={Number(userId)} />
      <RechartsCustomRadarStyled>
        {dataExist ? (
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart
              cx="50%"
              cy="50%"
              data={data}
              //bigger or smaller radar:
              outerRadius="70%"
              margin={{ left: 40 }}
            >
              <PolarGrid radialLines={false} />
              <PolarAngleAxis
                dataKey="subject"
                tick={{ fill: colors.bgWhite, fontSize: 12, dy: 4 }}
              />
              <PolarRadiusAxis />
              <Radar
                name={data?.userId}
                dataKey="value"
                fill={colors.main}
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        ) : (
          <Loader />
        )}
      </RechartsCustomRadarStyled>
    </>
  );
}

export default RechartsCustomRadar;
