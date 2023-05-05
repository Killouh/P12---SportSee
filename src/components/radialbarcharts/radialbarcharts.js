import "./radialbarcharts.css";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
  Legend,
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
    <div className="objective_container">
        <div className="radial_text_container">
    <p className="radial_text">Score</p>
  </div>
      <ResponsiveContainer width="100%" height={260}>

        <RadialBarChart
          className="radial"
          innerRadius="70%"
          outerRadius="80%"
          data={score}
          startAngle={90}
          endAngle={-450}
          clockWise={true}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            tick={false}
            fill="red"
          />
          <RadialBar
            minAngle={0}
            background
            dataKey="todayScore"
            strokeWidth={8}
            cornerRadius={10}
          />
          <Legend
            verticalAlign="middle"
            align="center"
            layout="vertical"
            content={() => {
              const scoreData = score[0];
              return (
                <div>
                  <p className="radial_legend_number">
                    {scoreData.todayScore}%
                  </p>
                  <p className="radial_legend_text">de votre objectif</p>
                </div>
              );
            }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

RadialBarCharts.propTypes = {
  data: PropTypes.object,
};
