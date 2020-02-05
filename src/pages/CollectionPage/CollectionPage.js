import React from 'react';
import {connect} from 'react-redux';

import {selectShopCollection} from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/CollectionItem';

import './CollectionPage.scss';

const CollectionPage = ({collection}) => {
    console.log(collection);
    return(
        <div className="collection-page">
            <h2>CollectionPage</h2>
        </div>
    )
}

const mapStateToProps = (state, ownProps)=>({
    collection: selectShopCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);