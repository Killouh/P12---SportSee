import data from '../../data/data.json';
import './radialbarcharts.css';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

export default function radialBarCharts(props) {
    const { id } = props;
    const userId = parseInt(id);

    const flattenedData = data.USER_MAIN_DATA
        .filter(user => user.id === userId)
        .reduce((acc, user) => {
            return [
                ...acc,

                { todayScore: 100, fill: 'white', background: 'white' },
                { todayScore: user.todayScore * 100, fill: 'red', background: 'grey' },

            ]
        }, []);

    return (



        <ResponsiveContainer width="25%" height={260}>
            <RadialBarChart
                className="radial"
                innerRadius='50%'
                outerRadius="80%"
                data={flattenedData}
                startAngle={90}
                endAngle={450}
                clockWise={true}
            >
                <RadialBar minAngle={0} background dataKey='todayScore' />
            </RadialBarChart>
        </ResponsiveContainer>
    );

};