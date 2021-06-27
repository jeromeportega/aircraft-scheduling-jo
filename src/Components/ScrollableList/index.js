import React from 'react';
import PropTypes from 'prop-types';
import './ScrollableList.css';
import { listItemComponents } from '../../utils/constants';

const ScrollableList = ({itemType, items}) => {
  const renderItems = () => {
    const ItemComponent = listItemComponents[itemType];
    return items.map(item => <ItemComponent />);
  }

  return (
    <div className="scrollable-container">
      {renderItems()}
    </div>
  );
};

ScrollableList.propTypes = {
  itemType: PropTypes.oneOf(['aircraft', 'flight']).isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
}

export default ScrollableList;