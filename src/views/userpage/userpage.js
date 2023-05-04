import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import data from '../../data/data.json';
import "./userpage.css";
import { getUserInfos } from "../../api/api";


// Components :
import ActivityCharts from "../../components/activitycharts/activitycharts";
import EnergyCards from "../../components/energycards/energycards";
import SessionsCharts from "../../components/sessionscharts/sessionscharts";
import RadarCharts from "../../components/radarcharts/radarcharts";
import RadialBarCharts from "../../components/radialbarcharts/radialbarcharts";

export default function UserPage() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const request = await getUserInfos(id);
      if (!request) return navigate("/404");
      setData(request.data);
    };
    getData();
  }, [id, navigate]);
  if (data.length === 0) return null;

  return (
    <div className="body_home">
      <div className="title_home">
        <h2 className="title_home_text">
          Bonjour{" "}
          <span className="username_text">{data.userInfos.firstName}</span>
        </h2>
        <p className="title_text">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
      <div className="compenents_container">
        <div className="activitysession_container">
          <div className="activity">
            <ActivityCharts className="activityCharts_location" id={id} />
          </div>
          <div className="session">
            <SessionsCharts className="sessions_location" id={id} />
            <RadarCharts className="sessions_location" id={id} />
            <RadialBarCharts className="sessions_location" data={data} />
          </div>
        </div>
        <div className="energycards_container">
          <EnergyCards
            className="energycards_location"
            info={`${data.keyData.calorieCount} kCal`}
            text="Calories"
            id={id}
            type="calorieCount"
          />
          <EnergyCards
            className="energycards_location"
            info={`${data.keyData.proteinCount} g`}
            text="Proteines"
            id={id}
            type="proteinCount"
          />
          <EnergyCards
            className="energycards_location"
            info={`${data.keyData.carbohydrateCount} g`}
            text="Glucides"
            id={id}
            type="carbohydrateCount"
          />
          <EnergyCards
            className="energycards_location"
            info={`${data.keyData.lipidCount} g`}
            text="Lipides"
            id={id}
            type="lipidCount"
          />
        </div>
      </div>
    </div>
  );
}

