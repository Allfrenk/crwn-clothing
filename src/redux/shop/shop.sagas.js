import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebese.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.action";

import ShopActionTypes from "./shop.type";

/////////////////////////////////////////////////////

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
    //
  } catch (error) {
    yield fetchCollectionsFailure(error.message);
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

// SHOP SAGAS //
export function* shopSagas() {
  yield all([
    call(fetchCollectionsStart),
    //
  ]);
}
