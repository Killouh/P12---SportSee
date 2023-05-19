import "./sessionscharts.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getUserAverageSessions, UserAverageSessions } from "../../api/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import SessionToolType from "./sessiontooltype";

/**
 * Get the user activity and render the LineChart called from userpage
 *
 * @param {string} id User id
 * @param {id: number, day: number, sessionLength: number}, An Array with user average session data
 * @returns {JSX} => Session Charts with props parameters
 */

export default function SesssionsCharts(props) {
  const { id } = props;
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const request = await getUserAverageSessions(id);

      if (!request) return alert("data error");

      const userAverageSessions = new UserAverageSessions(
        request.userId,
        request.sessions

      );
    setData(userAverageSessions);

      const formatData = userAverageSessions.sessions.map((data) => {
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
    <div className="session_container">
      <div className="session_title">
        <h2 className="session_title_text">Durée moyenne des sessions</h2>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis tickFormatter={(value) => data[value].day} tick={{ stroke: "white" }} axisLine={false} />
          <YAxis hide />
          <Tooltip content={<SessionToolType />} />
          <Line type="monotone" dataKey="sessionLength" stroke="white" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

SesssionsCharts.propTypes = {
  id: PropTypes.string,
};
