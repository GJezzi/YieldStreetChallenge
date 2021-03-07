import {all} from 'redux-saga/effects';

import survey from './survey/sagas';

export default function* rootSaga() {
  return yield all([survey]);
}
