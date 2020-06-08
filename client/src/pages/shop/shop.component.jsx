import React, { useEffect, lazy } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { fecthCollectionsStart } from '../../redux/shop/shop.actions';

const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
);
const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
);

const ShopPage = ({ fecthCollectionsStart, match }) => {
  useEffect(() => {
    fecthCollectionsStart();
  }, [fecthCollectionsStart]);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fecthCollectionsStart: () => dispatch(fecthCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
