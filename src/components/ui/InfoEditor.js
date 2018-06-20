import React from 'react';
import PropTypes from 'prop-types';
import {FULCRUM} from '../../constants';

/**
 * Presentational Component for Info Editor
 */
const InfoEditor = ({form={}, record={}, onNewInfo=f=>f}) => {
  let _status;
  const _inputs = {};
  const submit = e => {
      e.preventDefault();
      
      // extract actual values from elements
      const elementVals = {};
      Object.keys(_inputs).forEach(key => elementVals[key] = _inputs[key].value || '');
      const structureType =
        form.elements.find((element) => (element.data_name === 'structure_type'));
      
      // handle structure type schema
      elementVals[structureType.key] = {
        choice_values: [elementVals[structureType.key]],
        other_values: []
      };
      const newInfo = {
        status: _status.value,
        form_values: elementVals
      }
      onNewInfo(record.id, newInfo);

      // clear fields
      _status.value = '';
      Object.keys(_inputs).forEach((key) => {
        _inputs[key].value = '';  
      });
  }
  return (
    Object.keys(record).length === 0 ?
      <p>Please select a marker on the map</p> :
      <form id="info-editor" onSubmit={submit}>
        <div>
          <label className='form-label'>Status</label>
          <label className='form-value'>{record.status}</label>
          <select ref={input=>_status = input} name="status" required>
          <React.Fragment>
            <option key='0'></option>
              {
                form.status_field.choices.map((choice, i) =>
                  <option key={i+1}>{choice.value}</option>
                )
              }
          </React.Fragment>
          </select>
        </div>
        {
          form.elements.map((element, i) =>
            <div key={i}>
              <label className='form-label'>{element.label}</label>
              {
                element.type === 'TextField' ?
                  <React.Fragment>
                    <label className='form-value'>{record.form_values[element.key] || ''}</label>
                    <input ref={input=>(_inputs[element.key] = input)} className={element.type} type="text" placeholder="Please enter new text"/>
                  </React.Fragment> :
                  element.type === 'ChoiceField' ?
                    <React.Fragment>
                      <label className='form-value'>{record.form_values[element.key] ? record.form_values[element.key].choice_values[0] : ''}</label>
                      <select ref={input=>_inputs[element.key] = input} className={element.type} required>
                      <React.Fragment>
                        <option key='0'></option>
                        {
                          element.choices.map((choice, i) =>
                            <option key={i+1}>{choice.value}</option>
                          )
                        }
                      </React.Fragment>
                      </select>
                      </React.Fragment> :
                    element.type === 'PhotoField' ?
                      !record.form_values[element.key] ? <p /> :
                      record.form_values[element.key].map(({photo_id}, i) =>
                        <img className={element.type} key={i} src={`${FULCRUM.URL}photos/${photo_id}.jpg?token=${FULCRUM.TOKEN}`} alt={element.photo_id}/>
                      ) :
                      <p>Invalid element type</p>
              }
            </div>
        )}
        <button>Edit</button>
      </form>
  );
}

InfoEditor.propTypes = {
  form: PropTypes.object,
  record: PropTypes.object,
  onNewInfo: PropTypes.func,
}

export default InfoEditor;