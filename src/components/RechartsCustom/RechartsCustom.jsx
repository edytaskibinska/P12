import React from "react";
import styled from "styled-components";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const dataRecharts = [
  {
    name: "1",
    calories: 4000,
    poids: 2400,
    amt: 2400,
  },
  {
    name: "2",
    calories: 3000,
    poids: 1398,
    amt: 2210,
  },
  {
    name: "3",
    calories: 2000,
    poids: 9800,
    amt: 2290,
  },
  {
    name: "4",
    calories: 2780,
    poids: 3908,
    amt: 2000,
  },
  {
    name: "5",
    calories: 1890,
    poids: 4800,
    amt: 2181,
  },
  {
    name: "6",
    calories: 2390,
    poids: 3800,
    amt: 2500,
  },
  {
    name: "7",
    calories: 3490,
    poids: 4300,
    amt: 2100,
  },
];

const RechartsCustomStyled = styled.div`
  border: 1px solid red;

  .recharts-bar-rectangle {
    border-radius:10px;
  }
`;

function RechartsCustom() {
  return (
    <RechartsCustomStyled>
      <BarChart
        width={500}
        height={300}
        data={dataRecharts}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical strokeDasharray="1 1" verticalPoints={[1]} />
        <XAxis dataKey="name" />
        <YAxis orientation="right"/>
        {/* <Tooltip /> */}
        <Legend />
        <Bar dataKey="poids" fill="#282D30" radius={[3.5,3.5, 0, 0 ]} width="5"/>
        <Bar dataKey="calories" fill="#E60000" radius={[3.5,3.5, 0, 0 ]}/>
      </BarChart>
    </RechartsCustomStyled>
  );
}

export default RechartsCustom;
