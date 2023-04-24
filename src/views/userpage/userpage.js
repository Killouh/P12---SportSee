import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../../data/data.json';
import './userpage.css';

export default function UserPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: '',
    userInfos: {
      firstName: '',
      lastName: '',
      age: '',
    },
    todayScore: 0,
    keyData: {
      calorieCount: 0,
      proteinCount: 0,
      carbohydrateCount: 0,
      lipidCount: 0,
    },
  });

  useEffect(() => {
    const userDetails = data.USER_MAIN_DATA.find((user) => user.id === parseInt(id));
    setUser(userDetails);

    // Vérification de l'existence de l'ID dans le tableau de données
    if (!userDetails) {
      navigate('/404');
    }
  }, [id, navigate]);

  return (
    <div className="body_home">
      <div className="title_home">
        <h2 className="title_home_text">
          Bonjour <span className="username_text">{user.userInfos.firstName}</span>
        </h2>
        <p className="title_text">Félicitation ! Vous avez explosé vos objectifs hier</p>
      </div>
      <div className="compenents_container">
        <div className="activitysession_container">
          <div className="activity"></div>
          <div className="session"></div>
        </div>
        <div className="energy"></div>
      </div>
    </div>
  );
}
