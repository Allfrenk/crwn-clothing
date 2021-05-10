import { all, call, takeLatest, put } from "redux-saga/effects";

import UserActionType from "../user/user.types";
import { clearCart } from "./cart.actions";

//

// CLEAR CART ON SIGN OUT
export function* cleanCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionType.SIGN_OUT_SUCCESS, cleanCartOnSignOut);
}

// CART SAGAS
export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
