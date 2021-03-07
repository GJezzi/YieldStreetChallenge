import {takeLatest, all} from 'redux-saga/effects';

export function* identity({payload}) {
  const {name, email} = payload;

  const response = {name, email};
}

export default all([takeLatest('@survey/IDENTITY_REQUEST', identity)]);
