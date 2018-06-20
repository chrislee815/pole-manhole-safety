import React from 'react';
import PropTypes from 'prop-types';
import {FILTER_TYPE} from '../../constants';

/**
 * Presentational Component for Structure Type filter
 */
const Filter = ({filterBy=FILTER_TYPE.ALL, onSelect=f=>f}) => {
  return (
    <nav id="filter">
      {Object.keys(FILTER_TYPE).map((key, i) =>
        <a key={i}
          href="#f"
          className={(filterBy === FILTER_TYPE[key]) ? "filter-selected" : null}
          onClick={e => {
              e.preventDefault();
              onSelect(FILTER_TYPE[key]);
          }}>{FILTER_TYPE[key]}</a>
      )}
    </nav>
  );
}

Filter.propTypes = {
  filterBy: PropTypes.string,
  onSelect: PropTypes.func
};

export default Filter;