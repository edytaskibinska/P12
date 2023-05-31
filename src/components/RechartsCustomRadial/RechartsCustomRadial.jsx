import React from "react";
import { useState } from "react";
import { GetUserById } from "../../services/GetData";
import { Loader, Text } from "../../components";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import colors from "../../globalStyles/colorsIndex";
//import colorVariables from "../../globalStyles/vars/colorVariables";

import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const RechartsCustomRadialStyled = styled.div`
  border: 1px solid red;
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
    font-size: 14px;
    line-height: 14px;
    color: ${colors.graphitBg};
    z-index: 8;
    text-align: center;
  }
  .radialSoreTitle {
    position: absolute;
  }
`;

function RechartsCustomRadial() {
  let { userId } = useParams();
  const [data, setData] = useState(null);

  const dataExist = (data || data?.id) != null;

  //TODO modelisation de data ici ??
  let scoreToPercentage = 0;
  data?.todayScore
    ? (scoreToPercentage += data?.todayScore * 100)
    : (scoreToPercentage += data?.score * 100);
  let endAngleCalc = 360 / (100 / scoreToPercentage) + 90;
  //TODO ajustement des data au exhart ici :
  const scoreValue = [
    {
      name: "Score",
      value: `${scoreToPercentage}%`,
      score: scoreToPercentage,
      fill: colors.main,
    },
  ];
  //END TODO modelisation de data ici ??

  return (
    <>
      <GetUserById setData={setData} userId={Number(userId)} />
      {/* {console.log("data", data)} */}

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
