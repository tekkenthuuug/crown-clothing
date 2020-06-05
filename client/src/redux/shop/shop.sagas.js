import { takeLatest, call, put, all } from 'redux-saga/effects';
import { firestore } from '../../firebase/firebase.utils';
import { convertCollectionsSnapshotToMap } from './shop.utils';

import shopActionTypes from './shop.types';

import {
  fecthCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fecthCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure());
  }
}
export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export default function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
