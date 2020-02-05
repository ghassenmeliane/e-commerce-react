import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectShopCollections} from '../../redux/shop/shop.selectors';

import PreviewCollection from '../PreviewCollection';

import './CollectionsOverview.scss';

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {
            collections.map(({id, ...otherCollectionProps})=>(<PreviewCollection key={id} {...otherCollectionProps}/>))
        }
    </div>
)

const mapStateToProps = createStructuredSelector ({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(CollectionsOverview);