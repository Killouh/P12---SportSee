import React from "react";
import "./home.css";
// import { useState, useEffect } from 'react';
// import data from "../../data/data.json";
// import { useParams } from 'react-router-dom';
// import { Link } from "react-router-dom";

export default function Home() {
  // const [prenom, setPrenom] = useState([]);
  // const { id } = useParams();

  // useEffect(() => {
  //   setPrenom(data);
  // }, []);


  return (
    <div className="body_home">
      <div className="title_home">
        <h2 className="title_home_text">
          Bonjour <span className="username_text">Thomas</span>
        </h2>
        <p className="title_text">
          Félicitation ! Vous avez explosé vos objectifs hier
        </p>
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
