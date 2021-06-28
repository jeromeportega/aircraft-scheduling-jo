import React from 'react';
import './FlightItem.css';

const FlightItem = ({item, onItemClick}) => {
  const onFlightClickHandler = () => onItemClick(item);

  return (
    <button className="flight-item-container" onClick={onFlightClickHandler}>
      <h2 className="flight-number">{item.id}</h2>
      <div className="flight-info-container">
        <div>
          <h4>{item.origin}</h4>
          <h4>{item.readable_departure}</h4>
        </div>
        <div>
          <h4>{item.destination}</h4>
          <h4>{item.readable_arrival}</h4>
        </div>
      </div>
    </button>
  );
}

export default FlightItem;