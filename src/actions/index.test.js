import {FILTER_TYPE} from '../constants'
import storeFactory from '../store';
import {
  fetchForm,
  fetchRecords,
  selectPoint,
  selectFilter,
  editRecord
} from '../actions';

describe('Action Creators', ()=>{
  let store;
  
  describe('Fetch a Form', ()=>{
    const form = {
      "form": {
        "name": "Pole and Manhole Safety App",
        "elements": [
          {
            "type": "TextField",
            "key": "98ea",
            "label": "Structure ID",
            "data_name": "structure_id",
          }
        ]
      }
    };
    beforeAll(()=>{
      store = storeFactory({});
      store.dispatch(fetchForm(form));
    });

    it('should fetch a form', ()=>expect(store.getState().formReducer.form).toBeDefined());
    it('should fetch form with properties', ()=>expect(Object.keys(store.getState().formReducer.form).length).toBe(2));
  });
  
  it('should fetch records', ()=>{
    const records = [
      {
        "status": "Need QA",
        "id": "0",
        "latitude": 49.27028613,
        "longitude": -122.9806876,
      },
      {
        "status": "QA Complete",
        "id": "1",
        "latitude": 49.27028613,
        "longitude": -122.9806876,
      }
    ];
    store = storeFactory({});
    store.dispatch(fetchRecords(records));
    expect(store.getState().recordsReducer.length).toBe(2);
  });

  it('should select point', ()=>{
    const pointIdx = 3;
    store = storeFactory({});
    store.dispatch(selectPoint(pointIdx));

    expect(store.getState().selectedPointReducer).toBe(3);
  });

  it('should select filter', ()=>{
    const filterBy = FILTER_TYPE.POLE;
    store = storeFactory({});
    store.dispatch(selectFilter(filterBy));

    expect(store.getState().filterByReducer).toBe(FILTER_TYPE.POLE);
  });

  describe('Edit a Record', ()=>{
    const initialRecord = {
      id: "0",
      status: "QA Complete",
      form_values: {
        "98ea": "0002"
      },
    };
    const modifiedRecord = {
      id: "0",
      status: "Need QA",
      form_values: {
        "98ea": "0001"
      },
    };
    beforeAll(()=>{
      store = storeFactory({recordsReducer: [initialRecord]});
      store.dispatch(editRecord(0, modifiedRecord));
    });

    it('should edit a record', ()=>{
      expect(store.getState().recordsReducer[0]).toEqual(modifiedRecord);
    })
  });
});

