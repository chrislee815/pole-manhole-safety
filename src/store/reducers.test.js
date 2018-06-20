import deepFreeze from 'deep-freeze';
import {ACTION_TYPE, FILTER_TYPE} from '../constants';
import {
  formReducer,
  recordReducer,
  recordsReducer,
  selectedPointReducer,
  filterByReducer
} from './reducers';

describe('Reducer Test', ()=>{
  describe('Form Reducer', ()=>{
    it('FETCH_FORM success', ()=> {
      const state = {
        "status_field": {
          "choices": [
            {
                "label": "Need QA",
                "value": "Need QA",
                "color": "#CB0D0C"
            }
          ]
        }
      };
      const action = {
        type: ACTION_TYPE.FETCH_FORM,
        form: {
          "status_field": {
            "choices": [
              {
                  "label": "Abort QA",
                  "value": "Abort QA",
                  "color": "#CB0D0C"
              }
            ]
          }
        }
      }
      deepFreeze(state);
      deepFreeze(action);
      const results = formReducer(state, action);
      expect(results)
        .toEqual({
          "status_field": {
            "choices": [
              {
                  "label": "Abort QA",
                  "value": "Abort QA",
                  "color": "#CB0D0C"
              }
            ]
          }
        });
    });
  });
  
  describe('Record Reducer', ()=>{
    it('EDIT_RECORD success', ()=>{
      const state = {
        id: "0",
        status: "QA Complete",
        form_values: {
          "98ea": "0002"
        },
      };
      const action = {
        type: ACTION_TYPE.EDIT_RECORD,
        id: "0",
        status: "Need QA",
        form_values: {
          "98ea": "0003"
        },
      };
      deepFreeze(state);
      deepFreeze(action);
      const results = recordReducer(state, action);
      expect(results)
        .toEqual({
          id: "0",
          status: "Need QA",
          form_values: {
            "98ea": "0003"
          }
        });
    })
  });
  
  describe('Records Reducer', ()=>{
    it('FETCH_RECORDS success', ()=>{
      const state = [];
      const action = {
        type: ACTION_TYPE.FETCH_RECORDS,
        records: [
          {
            "status": "Need QA",
            "id": "0",
            "latitude": 49.27028613,
            "longitude": -122.9806876,
          }
        ]
      };
      deepFreeze(state);
      deepFreeze(action);
      const results = recordsReducer(state, action);
      expect(results)
        .toEqual([{
          "status": "Need QA",
          "id": "0",
          "latitude": 49.27028613,
          "longitude": -122.9806876,
        }]
      )
    });
  
    it('EDIT_RECORD success', ()=>{
      const state = [{
        id: "0",
        status: "QA Complete",
        form_values: {
          "98ea": "0002"
        },
      }];
      const action = {
        type: ACTION_TYPE.EDIT_RECORD,
        id: "0",
        status: "Need QA",
        form_values: {
          "98ea": "0003"
        },
      };
      deepFreeze(state);
      deepFreeze(action);
      const results = recordsReducer(state, action);
      expect(results)
        .toEqual([{
          id: "0",
          status: "Need QA",
          form_values: {
            "98ea": "0003"
          }
        }]);
    });
  });
  
  describe('Select Point Reducer', ()=>{
    it('SELECT_POINT success', ()=>{
      const state = 0;
      const action = {
        type: ACTION_TYPE.SELECT_POINT,
        recordIdx: 2
      };
      deepFreeze(state);
      deepFreeze(action);
      const results = selectedPointReducer(state, action);
      expect(results).toBe(2);
    });
  })
  
  describe('Filter by Reducer', ()=>{
    it('SELECT_FILTER success', ()=>{
      const state = FILTER_TYPE.ALL;
      const action = {
        type: ACTION_TYPE.SELECT_FILTER,
        filterBy: FILTER_TYPE.MANHOLE
      };
      deepFreeze(state);
      deepFreeze(action);
      const results = filterByReducer(state, action);
      expect(results).toBe(FILTER_TYPE.MANHOLE);
    });
  })
});
