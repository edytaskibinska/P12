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

const RechartsCustomBarsStyled = styled.div`
  .recharts-bar-rectangle {
    border-radius: 10px;
  }
`;

function RechartsCustomBars() {
  let { userId } = useParams();
  const [data, setData] = useState(null);

  return (
    <>
      <GetUserActivity setData={setData} userId={Number(userId)} />
      {console.log("GetUserActivity /activity", data)}
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
