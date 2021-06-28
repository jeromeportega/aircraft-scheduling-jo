import React from 'react';
import './RotationItem.css';

const RotationItem = ({item, onItemClick}) => {
  const onRotationClickHandler = () => onItemClick(item);

  return (
    <button className="rotation-item-container" onClick={onRotationClickHandler}>
      <h2 className="rotation-flight-number">{item.id}</h2>
      <div className="rotation-info-container">
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

export default RotationItem;