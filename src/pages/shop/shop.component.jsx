import React from 'react';
import { Route } from "react-router-dom";
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { connect } from "react-redux";
import { updateCollections } from '../../redux/shop/shop.actions'
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

componentDidMount() {
  const collectionRef = firestore.collection('collections');

  collectionRef.onSnapshot(async Snapshot => {
    const collectionsMap = convertCollectionsSnapshotToMap(Snapshot);
    console.log(collectionsMap);
  });
}

  render() {
    const { match } = this.props;
     return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default ShopPage;
