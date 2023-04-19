import React from 'react'
import './home.css';
import { useState, useEffect } from 'react';
// import data from "../../data/data.json";
import { Link } from "react-router-dom";



export default function Home() {

    return (
        <div className="body-home">
            <div className="background_title">
                <div className="title_img">
                    <h2 className="title_home">Chez vous, partout et ailleurs</h2>
                </div>
            </div>
        </div>
    );
}