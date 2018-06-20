import React from 'react';
import {connect} from 'react-redux';
import fulcrumClient from '../lib/fulcrumClient';
import Filter from './containers/Filter';
import Map from './Map';
import InfoEditor from './containers/InfoEditor';
import {fetchForm, fetchRecords} from '../actions';
import '../stylesheets/index.css';

/**
 * Root component containing 3 main parts (Filter, InfoEditor, Map)
 * Also handling HTTP requests for retrieving form template and whole records
 */
class App extends React.Component {
  componentDidMount() {
    fulcrumClient.get('forms/706fe380-bd94-4d3d-9a52-40ea1c7175b1.json')
      .then(({data}) =>
        this.props.onFetchForm(data.form)
      )
      .catch((err)=>console.error(err));

    fulcrumClient.get('records')
      .then(({data}) =>
        this.props.onFetchRecords(data.records)        
      )
      .catch((err)=>console.error(err));
  }
  
  render() {
    return (
      <div id='app'>
        <div id='input-panel'>
          <Filter />
          <InfoEditor />
        </div>
        <Map />
      </div>
    ); 
  } 
};

export default connect(
  null,
  dispatch =>
  ({
    onFetchForm(form) {
      dispatch(fetchForm(form));
    },
    onFetchRecords(records) {
      dispatch(fetchRecords(records));
    }    
  })
)(App);