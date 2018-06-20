import {connect} from 'react-redux';
import Filter from '../ui/Filter'
import {selectFilter} from '../../actions';

/**
 * Container component for Structure Type filter
 */
export default connect(
  state =>
  ({
    filterBy: state.filterByReducer
  }),
  dispatch =>
  ({
    onSelect(filterBy) {
      dispatch(selectFilter(filterBy));
    }
  })
)(Filter);