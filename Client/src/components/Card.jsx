import React from 'react';
import '../css/Card.css';

const Card = () => {
  return (
    <>
      <div className="card">
          <h2 className="card-title">Confirma o clima de uma cidade/País:</h2>
          <h3>Titulo</h3>
          <div className="card-data">
            <div className="temp">°C</div>
            <span></span>

            <div className="card-description">
              <span>Umidade:%</span>
              <span>Vento:km/h</span>
            </div>
            <div className="wather-icon">
            </div>
          </div>
          <input type="text" placeholder="Pais ou Cidade,Pais(BR, US)" />
          <input type="submit" value="" className="submit-button" />
      </div>
    </>
  );
};

export default Card;