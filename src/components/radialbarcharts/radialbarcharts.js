import "./radialbarcharts.css";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import PropTypes from "prop-types";

/**
 * Get the user info and render the energy cards called from userpage
 * @param {props[data{}]}, Props from getUserInfos called from userpage
 * @returns {JSX}
 */

export default function RadialBarCharts(props) {
  const { data } = props;

  const score = [
    { todayScore: data.todayScore * 100, fill: "red", background: "grey" },
  ];

  return (
    <ResponsiveContainer width="25%" height={260}>
      <RadialBarChart
        className="radial"
        innerRadius="50%"
        outerRadius="80%"
        data={score}
        startAngle={90}
        endAngle={450}
        clockWise={true}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          tick={false}
          fill="red"
        />
        <RadialBar minAngle={0} background dataKey="todayScore" />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

RadialBarCharts.propTypes = {
  data: PropTypes.object,
};
