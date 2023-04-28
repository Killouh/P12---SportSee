import data from '../../data/data.json';
import './radarcharts.css';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

export default function radarCharts(props) {
  const { id } = props;
  const userId = parseInt(id);




const flattenedData = data.USER_PERFORMANCE
  .filter(user => user.userId === userId)
  .reduce((acc, user) => {
    return [
      ...acc,
      ...user.data.map(session => ({
        userId: user.userId,
        kind: data.USER_PERFORMANCE[0].kind[session.kind],
        value: session.value
      }))
    ];
  }, []);
  



  return (



    <ResponsiveContainer width="25%" height={260}>
      <RadarChart outerRadius={90} width={730} height={250} data={flattenedData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} tickFormatter={() => ''} />
        <Radar name="Mike" dataKey="kind" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Radar name="Lily" dataKey="value" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );

};