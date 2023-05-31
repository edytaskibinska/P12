import React from "react";
import { useState } from "react";
import { GetUserActivityPerformance } from "../../services/GetData";
import { Loader, Text } from "../../components";
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
`;

const fakeData = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

function RechartsCustomRadar() {
  let { userId } = useParams();
  const [data, setData] = useState(null);

  //const dataExist = (data || data?.id) != null;
  const dataExist = true

  //END TODO modelisation de data ici ??

  return (
    <>
      <GetUserActivityPerformance setData={setData} userId={Number(userId)} />
      {console.log("data", data)}

      <RechartsCustomRadarStyled>
        {dataExist ? (
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={fakeData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="Mike"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
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
