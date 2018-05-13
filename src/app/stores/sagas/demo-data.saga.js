import { call, put, takeLatest } from 'redux-saga/effects';

import DEMO_DATA_ACTION_TYPES from 'app/stores/action-types/demo-data.action-type';
import { DemoDataService } from 'app/services';

const demoDataService = new DemoDataService();

function* demoDataSaga() {
  yield takeLatest(DEMO_DATA_ACTION_TYPES.FETCH_DEMO_DATA_ACTION, fetchDemoData);
}

function* fetchDemoData() {
  try {
    const demoData = yield call(demoDataService.fetchDemoData);
    yield put({
      type: DEMO_DATA_ACTION_TYPES.FETCH_DEMO_DATA_ACTION_SUCCESS,
      payload: { data: demoData }
    });
  } catch(err) {
    yield put({
      type: DEMO_DATA_ACTION_TYPES.FETCH_DEMO_DATA_ACTION_FAILURE,
      payload: { error: err }
    });
  }
}

export default demoDataSaga;