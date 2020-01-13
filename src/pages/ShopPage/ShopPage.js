import React from 'react';

import SHOP_DATA from './shop.data';
import PreviewCollection from '../../components/PreviewCollection';

import './ShopPage.scss';

class ShopPage extends React.Component {
    state = {
        collections: SHOP_DATA
    }
    render() {
        return (
            <div>
                {
                    this.state.collections.map(({id, ...otherCollectionProps})=>(<PreviewCollection key={id} {...otherCollectionProps}/>))
                }
            </div>
        )
    }
}

export default ShopPage;