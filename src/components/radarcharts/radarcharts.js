import './radarcharts.css';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { getUserPerformance } from '../../api/api';
import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';

export default function RadarCharts(props) {
  const [data, setData] = useState([]);
  const { id } = props;
    useEffect(() => {
		const getData = async () => {
			const request = await getUserPerformance(id);
			if (!request) return alert('data error');
			const formatData = request.data.data.map((data) => {
				switch (data.kind) {
					case 1:
						return { ...data, kind: 'Cardio' };
					case 2:
						return { ...data, kind: 'Energie' };
					case 3:
						return { ...data, kind: 'Endurance' };
					case 4:
						return { ...data, kind: 'Force' };
					case 5:
						return { ...data, kind: 'Vitesse' };
					case 6:
						return { ...data, kind: 'Intensité' };
					default:
						return {...data };
				}
			});
			setData(formatData);
		};
		getData();
	}, [id]);
	if (data.length === 0) return null;
  



  return (
    <ResponsiveContainer width="25%" height={260}>
      <RadarChart outerRadius={90} width={730} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} tickFormatter={() => ''} />
        <Radar dataKey="value" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );

};

RadarCharts.propTypes = {
	id: PropTypes.string,
  }
