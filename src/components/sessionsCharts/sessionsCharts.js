import data from '../../data/data.json';
import './sessionsCharts.css';
import {LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function sesssionsCharts(props){
    const { id } = props;
    const userId = parseInt(id);
 
    const flattenedData = data.USER_AVERAGE_SESSIONS
    .filter(user => user.userId === userId)
    .reduce((acc, user) => {
      return [...acc, ...user.sessions.map(session => ({ userId: user.userId, day: session.day, sessionLength: session.sessionLength }))];
    }, []);
    console.log(flattenedData);
      // Fonction personnalisée pour les ticks de l'axe des abscisses
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

      <LineChart width={280} height={260} data={flattenedData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis tick={<CustomTick />} />
      <YAxis hide />
      <Tooltip />
      <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
    </LineChart>
    );
    
};