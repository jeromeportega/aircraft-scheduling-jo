import React from 'react';
import './FlightItem.css';

const FlightItem = ({item}) => {
  return (
    <div className="flight-item-container">
      <h2 className="flight-number">{item.id}</h2>
      <div className="flight-info-container">
        <div className="flight-start">
          <h4>{item.origin}</h4>
          <h4>{item.readable_departure}</h4>
        </div>
        <div className="flight-end">
          <h4>{item.destination}</h4>
          <h4>{item.readable_arrival}</h4>
        </div>
      </div>
    </div>
  );
}

export default FlightItem;