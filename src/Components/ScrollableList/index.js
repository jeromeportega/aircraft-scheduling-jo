import React from 'react';
import PropTypes from 'prop-types';
import './ScrollableList.css';
import { listItemComponents } from '../../utils/constants';

const ScrollableList = ({ itemType, header, items, onItemClick, error }) => {
  const renderItems = () => {
    const ItemComponent = listItemComponents[itemType].Component;
    return items.map(item => <ItemComponent item={item} key={item[listItemComponents[itemType].key]} onItemClick={onItemClick} />);
  }

  return (
    <div>
      <h2 className="scrollable-container-header">{header}</h2>
      {items.length < 1 ?
          <div className="no-items">No Items Yet</div>
        :
          <div className="scrollable-container">
            {renderItems()}
          </div>
      }
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

ScrollableList.propTypes = {
  itemType: PropTypes.oneOf(Object.keys(listItemComponents)).isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  header: PropTypes.string.isRequired,
  onItemClick: PropTypes.func,
  error: PropTypes.string,
}

export default ScrollableList;