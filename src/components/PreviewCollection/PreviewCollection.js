import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../CollectionItem';

import './PreviewCollection.scss';

const PreviewCollection = ({title, items, history, match, routeName}) => {
    return (
        <div className="collection-preview">
            <div className="title" onClick={() => history.push(`${match.path}/${routeName}`)}>
                {title.toUpperCase()}
            </div>
            <div className="preview">
                {
                    items
                    .filter((item,idx)=>idx<4)
                    .map((item)=>(
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default withRouter(PreviewCollection);