import { takeLatest, call, put, all, select } from 'redux-saga/effects';

import { createUserCartRef } from '../../firebase/firebase.utils';

import { selectCartItemsMap } from './cart.selectors';
import { selectCurrentUser } from '../user/user.selectors';

import userActionTypes from '../user/user.types';
import cartActionTypes from './cart.types';

import { clearCart, fetchCartSuccess, fetchCartFailure } from './cart.actions';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* getCartOnSignIn({ payload: { id } }) {
  try {
    const cartItemsMap = yield select(selectCartItemsMap);

    const userCartRef = yield call(createUserCartRef, id, cartItemsMap);
    const userCartSnapshot = yield userCartRef.get();

    yield put(fetchCartSuccess(userCartSnapshot.data().cartItems));
  } catch (error) {
    yield put(fetchCartFailure(error));
    console.log('Error getting user cart', error);
  }
}

export function* updateCart() {
  const currentUser = yield select(selectCurrentUser);
  if (!currentUser) return;

  const cartItems = yield select(selectCartItemsMap);

  const userCartRef = yield createUserCartRef(currentUser.id, cartItems);

  yield userCartRef.update({ cartItems });
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onSignInSuccess() {
  yield takeLatest(userActionTypes.SIGN_IN_SUCCESS, getCartOnSignIn);
}

export function* onCartChange() {
  const { ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } = yield cartActionTypes;
  yield takeLatest([ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM], updateCart);
}

export default function* cartSagas() {
  yield all([
    call(onSignOutSuccess),
    call(onSignInSuccess),
    call(onCartChange),
  ]);
}
