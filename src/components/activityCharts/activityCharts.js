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
import { getUserActivity } from "../../api/api";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Get the user activity and render the BarChart called from userpage
 *
 * @param {string} id User id
 * @param {id: number, session[] }, An Array with user information data
 * @returns {JSX}
 */

export default function ActivityCharts(props) {
  const { id } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const request = await getUserActivity(id);
      if (!request) return alert("data error");

      setData(request.data.sessions);
    };
    getData();
  }, [id]);
  if (data.length === 0) return null;

  // Customised function for axe's ticks
  const CustomTick = ({ x, y, payload }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="middle" fill="#666">
          {payload.value + 1}
        </text>
      </g>
    );
  };

  return (
    <ResponsiveContainer width="76%" height={260}>
      <BarChart width={858} height={300} data={data}>
        <XAxis stroke="#8884d8" tick={<CustomTick />} />
        <YAxis orientation="right" />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="kilogram" fill="#282D30" barSize={30} />
        <Bar dataKey="calories" fill="#E60000" barSize={30} />
      </BarChart>
    </ResponsiveContainer>
  );
}

ActivityCharts.propTypes = {
  id: PropTypes.string,
};
