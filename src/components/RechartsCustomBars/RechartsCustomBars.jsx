import React from "react";
import { useState } from "react";
import { GetUserActivity } from "../../services/GetData";
import { useParams } from "react-router-dom";
import RechartCustomTooltip from "./RechartsCustomTooltip";
import styled from "styled-components";
import colors from "../../globalStyles/colorsIndex";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const RechartsCustomBarsStyled = styled.div`
  position: relative;
  height: 320px;
  max-width: 835px;
  @media all and (min-width: 1024px) and (max-width: 1211px) {
    max-width: 675px;
  }
  @media all and (max-width: 1024px) {
    max-width: 635px;
  }
  .recharts-wrapper {
    width: 100% !important;
  }
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
      {/* {console.log("GetUserActivity /activity", data)} */}
      {(data || data?.id) != null && (
        <RechartsCustomBarsStyled>
          <ResponsiveContainer width="100%">
            <BarChart
              width={500}
              height={300}
              data={data?.sessions}
              barSize={7}
              margin={{ top: 102, bottom: 28, left: 20, right: 0 }}
            >
              <CartesianGrid
                vertical={false}
                verticalPoints={[1]}
                strokeDasharray={1}
                horizontal={true}
              />
              <text
                y="28px"
                x="20px"
                style={{ fill: colors?.graphitBg, fontSize: 15 }}
                className="customBarsTitle"
              >
                Activité quotidienne
              </text>
              <XAxis dataKey="name" tickLine={false} axisLine={false} dy={15} />
              <YAxis
                orientation="right"
                axisLine={false}
                tickLine={false}
                //TODO
                //dataKey="kilogram"
                //domain={[68, 81]}
              />
              <YAxis
                orientation="right"
                axisLine={false}
                tickLine={false}
                //dataKey="calories"
                //domain={[68, 81]}
              />
              <Tooltip
                content={RechartCustomTooltip}
                wrapperStyle={{ outline: "none" }}
              />
              <Legend
                iconSize={8}
                verticalAlign="top"
                align="right"
                wrapperStyle={{ top: "16px", right: "26px", fontSize: 15 }}
                payload={[
                  {
                    id: "kilogram",
                    type: "circle",
                    value: "Poids (kg)",
                    color: colors.blackBg,
                  },
                  {
                    id: "calories",
                    type: "circle",
                    value: "Calories brûlées (kCal)",
                    color: colors.main,
                  },
                ]}
              />
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
          </ResponsiveContainer>
        </RechartsCustomBarsStyled>
      )}
    </>
  );
}

export default RechartsCustomBars;
