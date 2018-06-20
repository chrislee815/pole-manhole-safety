import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {selectPoint} from '../actions';
import {FILTER_TYPE} from '../constants';

/**
 * 
 */
class Map extends React.Component {
  static propTypes = {
    filterBy: PropTypes.string,
    records: PropTypes.array,
    onClickMarker: PropTypes.func
  }
  static defaultProps = {
    filterBy: FILTER_TYPE.ALL,
    records: [],
    onClickMarker: f=>f
  }
  createMap() {
    this.map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 49.27242564, lng: -122.9791686},
      zoom: 14,
      mapTypeId: window.google.maps.MapTypeId.ROADMAP
    });
  }
  createMarkers(records) {
    this.markers = [];
    records.forEach((record, i) => {
      let marker = new window.google.maps.Marker({
        map: this.map,
        position: {lat: record.latitude, lng: record.longitude},
        // Add category property for later filter use
        category: record.form_values ?
          record.form_values[4900] ?
            record.form_values[4900].choice_values.length ?
              record.form_values[4900].choice_values[0] :
              FILTER_TYPE.ALL :
            FILTER_TYPE.ALL :
          FILTER_TYPE.ALL              
      });
      window.google.maps.event.addListener(marker, 'click', ((marker, i) => {
        return () => {
          // dispatch SELECT_POINT here
          this.props.onClickMarker(i);
          this.map.setZoom(16);
          this.map.panTo(marker.getPosition());
        }
      })(marker, i));
      this.markers.push(marker);
    });
  }
  filterMarkers(filterBy) {
    this.markers.forEach((marker) => {
      marker.setVisible(filterBy === FILTER_TYPE.ALL || filterBy === marker.category);
    });
  }
  componentDidMount() {     
    this.createMap();
  }
  render() {
    // Markers are create only once for lifetime otherwise filter existing markers
    if (this.markers && this.markers.length) {
      const {filterBy} = this.props;
      this.filterMarkers(filterBy);
    }
    else {
      const {records} = this.props;
      this.createMarkers(records);
    }
    return (
      <div id='map' />
    )
  }
};

export default connect(
  state =>
  ({
    records: state.recordsReducer,
    filterBy: state.filterByReducer
  }),
  dispatch =>
  ({
    onClickMarker(recordIdx) {
      dispatch(selectPoint(recordIdx));
    }
  })
)(Map);