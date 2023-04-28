import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import data from '../../data/data.json';
import './activitycharts.css';

export default function activityCharts(props){
    const { id } = props;
    const userId = parseInt(id);
 
    const flattenedData = data.USER_ACTIVITY
    .filter(user => user.userId === userId)
    .reduce((acc, user) => {
      return [...acc, ...user.sessions.map(session => ({ userId: user.userId, day: session.day, kilogram: session.kilogram, calories: session.calories }))];
    }, []);
  

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
      <ResponsiveContainer width="76%" height={260}>
        <BarChart width={858} height={300} data={flattenedData}>
            <XAxis stroke="#8884d8" tick={<CustomTick />} />
            <YAxis orientation="right"  />
            <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="kilogram" fill="#282D30" barSize={30} />
            <Bar dataKey="calories" fill="#E60000" barSize={30} />
          </BarChart>
          </ResponsiveContainer>
        
    );
    
};