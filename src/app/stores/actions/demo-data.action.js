import DEMO_DATA_ACTION_TYPES from 'app/stores/action-types/demo-data.action-type';

const DEMO_DATA_ACTIONS = {
  fetchDemoData: () => ({
    type: DEMO_DATA_ACTION_TYPES.FETCH_DEMO_DATA_ACTION,
    payload: {}
  }),
  fetchDemoDataSuccess: data => ({
    type: DEMO_DATA_ACTION_TYPES.FETCH_DEMO_DATA_ACTION_SUCCESS,
    payload: { data }
  }),
  fetchDemoDataFailure: error => ({
    type: DEMO_DATA_ACTION_TYPES.FETCH_DEMO_DATA_ACTION_FAILURE,
    payload: { error }
  })
};

export default DEMO_DATA_ACTIONS;