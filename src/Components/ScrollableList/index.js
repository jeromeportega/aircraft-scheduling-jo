import React from 'react';
import PropTypes from 'prop-types';
import './ScrollableList.css';
import { listItemComponents } from '../../utils/constants';

const ScrollableList = ({itemType, items, header}) => {
  const renderItems = () => {
    const ItemComponent = listItemComponents[itemType].Component;
    return items.map(item => <ItemComponent item={item} key={item[listItemComponents[itemType].key]} />);
  }

  return (
    <div>
      <h2 className="scrollable-container-header">{header}</h2>
      {items.length > 0 &&
        <div className="scrollable-container">
          {renderItems()}
        </div>
      }
    </div>
  );
};

ScrollableList.propTypes = {
  itemType: PropTypes.oneOf(Object.keys(listItemComponents)).isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  header: PropTypes.string.isRequired,
}

export default ScrollableList;