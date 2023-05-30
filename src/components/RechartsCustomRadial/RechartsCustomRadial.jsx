import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { GetUserActivity, GetUserById } from "../../services/GetData";
import { Loader } from "../../components";
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
  .recharts-legend-item-text {
    color: ${colors.blackBg}!important;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }
`;

const fakeData = [
  {
    name: "",
    score: 50,
    pv: 4800,
    fill: colors.bgClear,
  },
  {
    name: "Score",
    score: 50,
    pv: 4800,
    fill: colors.main,
  },
];

const scoreTextStyle = {
  top: "-20%",
  left: 0,
  transform: "translate(0, -50%)",
  color: colors.blackBg,
  lineHeight: "24px",
};

function RechartsCustomRadial() {
  let { userId } = useParams();
  const [data, setData] = useState(null);
  const dataExist = (data || data?.id) != null;
  //TODO ajuster
  let scoreToPercentage = 0;
  data?.todayScore
    ? (scoreToPercentage += data?.todayScore * 100)
    : (scoreToPercentage += data?.score * 100);
  let angle = 360 / (100 / scoreToPercentage) + 90;
  const value = [{ value: scoreToPercentage, fill: "#ff0000" }];
  //todo end
  return (
    <>
      {/* <GetUserActivity setData={setData} userId={Number(userId)} />
      {console.log("GetUserActivity /activity", data)} */}
      {console.log("dataExist", dataExist)}
      <GetUserById setData={setData} userId={Number(userId)} />
      {console.log("data", data)}

      <RechartsCustomRadialStyled>
        {/* {fakeData ? ( TODO condition ? : Loader */}
        {dataExist ? (
          <>
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                cx="50%"
                cy="50%"
                //TODO take data from getData and model like fakeData
                data={fakeData}
                innerRadius={300}
                outerRadius={60}
                barSize={8}
                //data={value}
                startAngle={90}
                endAngle={angle}
              >
                <RadialBar dataKey="score" cornerRadius={10} />
                <circle cx="50%" cy="50%" fill="white" r="55px"></circle>
                <Legend
                  iconSize={0}
                  layout="horizontal"
                  verticalAlign="middle"
                  align="center"
                  payload={value}
                  content={"SCORE"}
                />

                {/* <RadialBar
                  minAngle={15}
                  label={{ position: "insideStart", fill: colors?.bgWhite }}
                  background
                  clockWise
                  dataKey="score"
                />
                <Legend
                  iconSize={0}
                  layout="vertical"
                  verticalAlign="middle"
                  wrapperStyle={scoreTextStyle}
                /> */}
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
