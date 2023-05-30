import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { GetUserActivity } from "../../services/GetData";
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
  height: 100px;
`;

const fakeData = [

  {
    name: "",
    uv: 88,
    pv: 4800,
   fill: colors.bgClear,
  },
  {
    name: "unknow",
    uv: 12,
    pv: 4800,
    fill: "#ffc658",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

function RechartsCustomRadial() {
  let { userId } = useParams();
  const [data, setData] = useState(null);

  return (
    <>
      {/* <GetUserActivity setData={setData} userId={Number(userId)} />
      {console.log("GetUserActivity /activity", data)} */}
      <RechartsCustomRadialStyled>
        {/* {fakeData ? ( TODO condition ? : Loader */}
          <>
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="10%"
                outerRadius="80%"
                barSize={10}
                data={fakeData}
              >
                <RadialBar
                  minAngle={15}
                  label={{ position: "insideStart", fill: "#fff" }}
                  background
                  clockWise
                  dataKey="uv"
                />
                {/* <Legend
                  iconSize={10}
                  layout="vertical"
                  verticalAlign="middle"
                  wrapperStyle={style}
                /> */}
              </RadialBarChart>
            </ResponsiveContainer>
          </>
  
      </RechartsCustomRadialStyled>
    </>
  );
}

export default RechartsCustomRadial;
