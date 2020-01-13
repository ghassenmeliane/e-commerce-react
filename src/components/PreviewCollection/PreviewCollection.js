import React from 'react';

import CollectionItem from '../CollectionItem';

import './PreviewCollection.scss';

const PreviewCollection = ({title, items}) => {
    return (
        <div className="collection-preview">
            <div className="title">{title.toUpperCase()}</div>
            <div className="preview">
                {
                    items
                    .filter((item,idx)=>idx<4)
                    .map(({id, ...otherItemProps})=>(
                        <CollectionItem key={id} {...otherItemProps} />
                    ))
                }
            </div>
        </div>
    )
}

export default PreviewCollection;