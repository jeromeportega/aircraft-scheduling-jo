import React from 'react';
import './AircraftItem.css';

const AircraftItem = ({item}) => {
  return (
    <div className="aircraft-item-container">
      {item.ident}
    </div>
  );
}

export default AircraftItem;