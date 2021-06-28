import React from 'react';
import './AircraftItem.css';

const AircraftItem = ({ item, selectedItemId }) => {
  return (
    <div className='aircraft-item-container'>
      <h2 className="aircraft-header">{item.ident}</h2>
      <h3 className="aircraft-percentage">0%</h3>
    </div>
  );
}

export default AircraftItem;