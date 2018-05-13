import DEMO_DATA_ACTION_TYPES from 'app/stores/action-types/demo-data.action-type';
import demoDataInitialState from 'app/stores/states/demo-data.state';

function demoDataReducer(state = demoDataInitialState, action) {
  switch (action.type) {
    case DEMO_DATA_ACTION_TYPES.FETCH_DEMO_DATA_ACTION:
      return {
        ...state,
        isFetching: true,
        error: null
      };

    case DEMO_DATA_ACTION_TYPES.FETCH_DEMO_DATA_ACTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload && action.payload.data
      };

    case DEMO_DATA_ACTION_TYPES.FETCH_DEMO_DATA_ACTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload && action.payload.error
      };

    default:
      return state;
  }
}

export default demoDataReducer;