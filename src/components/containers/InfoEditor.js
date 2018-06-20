import {connect} from 'react-redux';
import InfoEditor from '../ui/InfoEditor'
import {editRecord} from '../../actions';

/**
 * Container component for Info Editor
 */
export default connect(
  state =>
  ({
    form: state.formReducer,
    record: state.recordsReducer[state.selectedPointReducer]
  }),
  dispatch =>
  ({
    onNewInfo(recordId, info) {
      dispatch(editRecord(recordId, info));
    }
  })
)(InfoEditor);