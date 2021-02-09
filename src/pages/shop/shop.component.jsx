import React from 'react';
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';


import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
 
}

  render() {
    const { match } = this.props;
     return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} 
        render={(props) => <CollectionsOverviewWithSpinner 
        isLoading={loading} {...props} />} />
        <Route
          path={`${match.path}/:collectionId`}
           render={(props) => <CollectionPageWithSpinner
           isLoading={loading} {...props} />} />
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  
});

export default connect(null, mapDispatchToProps)(ShopPage);
