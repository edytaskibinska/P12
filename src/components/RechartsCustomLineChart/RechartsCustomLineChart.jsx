import React from "react";
import { useState, useEffect } from "react";
import { GetUserAverageSessions } from "../../services/GetData";
import { useParams } from "react-router-dom";
import { Loader, Text } from "../../components";

import styled from "styled-components";
import colors from "../../globalStyles/colorsIndex";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const RechartsCustomLineChartStyled = styled.div`
  border: 1px solid blue;
  position: relative;
  min-height: 150px;
  .lineChartTitle {
    position: absolute;
    height: 48px;
    left: 0%;
    right: 0.68%;
    top: -3%;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: ${colors.bgWhite};
    mix-blend-mode: normal;
    opacity: 0.5;
  }
  .recharts-default-legend {
    display: none;
  }
  .recharts-responsive-container {
    height: 200px!important;
  }
`;

function RechartsCustomLineChart() {
  let { userId } = useParams();

  const [data, setData] = useState(null);
  console.log("LINECHART data", data);

  const dataExist = (data || data?.id) != null;

  return (
    <>
      <GetUserAverageSessions setData={setData} userId={Number(userId)} />
      {/* {console.log("GetUserAverageSessions ", data)} */}
      {dataExist ? (
        <>
          <RechartsCustomLineChartStyled>
            <Text className="lineChartTitle">Durée moyenne des sessions</Text>
            <ResponsiveContainer>
              <LineChart
                //adapter au contenu
                width={500}
                height={700}
                data={data}
                //change the height of line
                margin={{ top: 70, bottom: 30 }}
              >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis
                  dataKey="dayName"
                  axisLine={false}
                  tickLine={false}
                  //padding defini la longueur de graphe
                  padding={{ left: 9, right: 5 }}
                  stroke="white"
                  dy={19}
                />
                <Tooltip
                  cursor={false}
                  content={<Text>Tooltip</Text>}
                  wrapperStyle={{ border: "1px solid black" }}
                  //position={{ y: 0 }}
                />

                <Legend />
                <Line
                  type="monotone"
                  dataKey="sessionLength"
                  stroke={colors.bgWhite}
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </RechartsCustomLineChartStyled>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default RechartsCustomLineChart;
