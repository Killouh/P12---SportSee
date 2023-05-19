import "./radarcharts.css";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import { getUserPerformance, UserPerformance } from "../../api/api";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Get the user activity and render the RadarChart called from userpage
 *
 * @param {string} id User id
 * @param {userId: number, kind:{}, data[] }, An Array with user performance data
 * @returns {JSX} => Radar Charts with props parameters
 */

export default function RadarCharts(props) {
  const [data, setData] = useState([]);
  const { id } = props;
  useEffect(() => {
    const getData = async () => {
      const request = await getUserPerformance(id);
      if (!request) return alert("data error");

      const userPerformance = new UserPerformance(
        request.userId,
        request.kind,
        request.data,

      );
    setData(userPerformance);

      const formatData = userPerformance.data.map((data) => {
        switch (data.kind) {
          case 1:
            return { ...data, kind: "Cardio" };
          case 2:
            return { ...data, kind: "Energie" };
          case 3:
            return { ...data, kind: "Endurance" };
          case 4:
            return { ...data, kind: "Force" };
          case 5:
            return { ...data, kind: "Vitesse" };
          case 6:
            return { ...data, kind: "Intensité" };
          default:
            return { ...data };
        }
      });
      setData(formatData);
    };
    getData();
  }, [id]);
  if (data.length === 0) return null;

  return (
    <div className="radar_container">
    <ResponsiveContainer width="100%" height={260}>
      <RadarChart outerRadius={90} width={730} height={250} data={data} angleOffset={20}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" stroke="white" fontSize={13}/>
        <PolarRadiusAxis
          angle={30}
          domain={[0, 150]}
          tickFormatter={() => ""}
        />
        <Radar
          dataKey="value"
          stroke="red"
          fill="red"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
    </div>
  );
}

RadarCharts.propTypes = {
  id: PropTypes.string,
};
