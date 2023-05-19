import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "./activitycharts.css";
import { getUserActivity, UserActivity } from "../../api/api";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ActivityToolType from "./activitytooltype";

/**
 * Get the user activity and render the BarChart called from userpage
 *
 * @param {string} id User id
 * @param {userId: number, sessions[] }, An Array with user information data
 * @returns {JSX} => Activity Charts with props parameters
 */

export default function ActivityCharts(props) {
  const { id } = props;
  const [data, setData] = useState([null]);

  useEffect(() => {
    const getData = async () => {
      const request = await getUserActivity(id);
      if (!request) return alert("data error");

          const userActivity = new UserActivity(
          request.userId,
          request.sessions

        );
      setData(userActivity);
    };
    getData();
  }, [id]);
  if (data === null) return null;

  // Customised function for axe's ticks
  const CustomTick = ({ x, y, payload }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="middle" stroke="#9B9EAC">
          {payload.value + 1}
        </text>
      </g>
    );
  };

  return (
    <div className="activity_container">
      <div className="activity_title">
        <h2>Activité quotidienne</h2>
        <div className="activity_legend">
          <div className="activity_info">
            <div className="activity_info_icon kg"></div>
            <p className="activity_info_text kg">Poids (kg)</p>
          </div>
          <div className="activity_info">
            <div className="activity_info_icon cal"></div>
            <p className="activity_info_text">Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="76%" height={260}>
        <BarChart width={858} height={300} data={data.sessions}>
          <XAxis stroke="#8884d8" tick={<CustomTick />} />
          <YAxis
            orientation="right"
            tick={{ stroke: "#9B9EAC" }}
            domain={[0, 550]}
          />
          <Tooltip content={<ActivityToolType />} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5" vertical={false} />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

ActivityCharts.propTypes = {
  id: PropTypes.string,
};
