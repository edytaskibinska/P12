import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { GetUserActivity } from "../../services/GetData";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import colors from "../../globalStyles/colorsIndex";
//import colorVariables from "../../globalStyles/vars/colorVariables";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
//TODO delete
const dataRecharts = [
  {
    name: "1",
    calories: 4000,
    kilogram: 2400,
    amt: 2400,
  },
  {
    name: "2",
    calories: 3000,
    kilogram: 1398,
    amt: 2210,
  },
  {
    name: "3",
    calories: 2000,
    kilogram: 9800,
    amt: 2290,
  },
  {
    name: "4",
    calories: 2780,
    kilogram: 3908,
    amt: 2000,
  },
  {
    name: "5",
    calories: 1890,
    kilogram: 4800,
    amt: 2181,
  },
  {
    name: "6",
    calories: 2390,
    kilogram: 3800,
    amt: 2500,
  },
  {
    name: "7",
    calories: 3490,
    kilogram: 4300,
    amt: 2100,
  },
];
//TODO delete

const RechartsCustomBarsStyled = styled.div`
  .recharts-bar-rectangle {
    border-radius: 10px;
  }
`;

function RechartsCustomBars() {
  //const { id } = useParams();
  let { userId } = useParams();
  const [data, setData] = useState(null);

  return (
    <>
      <GetUserActivity setData={setData} userId={Number(userId)} />
      {console.log("Echarts data", data?.sessions)}
      {console.log("Echarts dataRecharts", dataRecharts)}
      {(data || data?.id) != null && (
        <RechartsCustomBarsStyled>
          <BarChart
            width={500}
            height={300}
            data={data?.sessions}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid
              vertical
              strokeDasharray="1 1"
              verticalPoints={[1]}
            />
            <XAxis dataKey="name" />
            <YAxis orientation="right" />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="kilogram"
              fill={colors.graphitBg}
              radius={[3.5, 3.5, 0, 0]}
              width="5"
            />
            <Bar
              dataKey="calories"
              fill={colors.main}
              radius={[3.5, 3.5, 0, 0]}
            />
          </BarChart>
        </RechartsCustomBarsStyled>
      )}
    </>
  );
}

export default RechartsCustomBars;
