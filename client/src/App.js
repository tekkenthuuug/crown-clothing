import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { checkUserSession } from './redux/user/user.actions';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Spinner from './components/spinner/spinner.components';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import GlobalStyle from './global.styles';

const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.container')
);

const App = ({ checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/signin' component={SignInAndSignUpPage} />
            <Route exact to='/checkout' component={CheckoutPage} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(null, mapDispatchToProps)(App);
