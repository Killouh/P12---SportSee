import React, {useEffect } from "react";
import './unknown.css';
import { Link, useNavigate} from "react-router-dom";

// -------------------------------

export default function NoMatch () {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/404');
      }, [navigate]);
    
    return (
        <div className="unknown_container">
            <h1 className="unknown_title"> 404</h1>
            <p className="unknown_text">Oups! La page que vous demandez n'existe pas.</p>
            <Link className="backhome" to="/">Retourner sur la page d'accueil</Link>
        </div>
    );
}