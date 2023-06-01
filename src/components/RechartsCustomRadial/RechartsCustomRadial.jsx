import React from "react";
import { useState } from "react";
import { GetUserById } from "../../services/GetData";
import { Loader, Text } from "../../components";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import colors from "../../globalStyles/colorsIndex";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const RechartsCustomRadialStyled = styled.div`
  width: 100%;
  height: 160px;
  position: relative;
  .recharts-legend-item-text {
    color: ${colors.blackBg};
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 10px;
    text-align: center;
    position: absolute;
    top: -42%;
    left: calc(50% - 30px);
    width: 60px;
  }
  .radialSoreText {
    position: absolute;
    top: 52%;
    left: calc(50% - 30px);
    width: 60px;
    font-size: 12px;
    line-height: 16px;
    color: ${colors.graphitBg};
    z-index: 8;
    text-align: center;
  }
  .radialSoreTitle {
    position: absolute;
    top: -3%;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: ${colors.blackBg};
  }
`;

function RechartsCustomRadial() {
  let { userId } = useParams();
  const [data, setData] = useState(null);

  const dataExist = (data || data?.id) != null;

  //calculations based on fetched data
  let scoreToPercentage = 0;
  data?.todayScore
    ? (scoreToPercentage += data?.todayScore * 100)
    : (scoreToPercentage += data?.score * 100);
  let endAngleCalc = 360 / (100 / scoreToPercentage) + 90;
  const scoreValue = [
    {
      name: "Score",
      value: `${scoreToPercentage}%`,
      score: scoreToPercentage,
      fill: colors.main,
    },
  ];

  return (
    <>
      <GetUserById setData={setData} userId={Number(userId)} />
      <RechartsCustomRadialStyled>
        {dataExist ? (
          <>
            <Text className="radialSoreTitle">Score</Text>
            <Text className="radialSoreText">de votre objectif</Text>
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                cx="50%"
                cy="50%"
                data={scoreValue}
                innerRadius={300}
                outerRadius={60}
                barSize={8}
                startAngle={90}
                endAngle={endAngleCalc}
              >
                <RadialBar dataKey="score" cornerRadius={10} />
                <circle
                  cx="50%"
                  cy="50%"
                  fill={colors.bgWhite}
                  r="55px"
                ></circle>
                <Legend
                  iconSize={0}
                  layout="horizontal"
                  verticalAlign="middle"
                  align="center"
                  payload={scoreValue}
                  content={"SCORE"}
                />
              </RadialBarChart>
            </ResponsiveContainer>
          </>
        ) : (
          <Loader />
        )}
      </RechartsCustomRadialStyled>
    </>
  );
}

export default RechartsCustomRadial;
