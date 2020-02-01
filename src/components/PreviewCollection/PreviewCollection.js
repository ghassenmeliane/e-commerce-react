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
                    .map((item)=>(
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default PreviewCollection;