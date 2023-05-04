import "./sessionscharts.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { getUserAverageSessions } from "../../api/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Get the user activity and render the LineChart called from userpage
 *
 * @param {string} id User id
 * @param {id: number, day: number, sessionLength: number}, An Array with user average session data
 * @returns {JSX}
 */

export default function SesssionsCharts(props) {
  const { id } = props;
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const request = await getUserAverageSessions(id);
      if (!request) return navigate("/404");
      console.log(request.data.sessions);
      const formatData = request.data.sessions.map((data) => {
        switch (data.day) {
          case 1:
            return { ...data, day: "L" };
          case 2:
            return { ...data, day: "M" };
          case 3:
            return { ...data, day: "M" };
          case 4:
            return { ...data, day: "J" };
          case 5:
            return { ...data, day: "V" };
          case 6:
            return { ...data, day: "S" };
          case 7:
            return { ...data, day: "D" };
          default:
            return { ...data };
        }
      });
      setData(formatData);
    };
    getData();
  }, [id, navigate]);
  if (data.length === 0) return null;

  return (
    <ResponsiveContainer width="25%" height={260}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis tickFormatter={(value) => data[value].day} />
        <YAxis hide />
        <Tooltip />
        <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}

SesssionsCharts.propTypes = {
  id: PropTypes.string,
};
