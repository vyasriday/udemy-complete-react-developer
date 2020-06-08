import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import './CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => (
	<div className='collection-preview'>
		<h1 className='title'>{title.toUpperCase()}</h1>
		<div className='preview'>
			{items
				.filter((item, index) => index < 4)
				.map(({ id, ...OtherItemProps }) => (
					<CollectionItem key={id} {...OtherItemProps} />
				))}
		</div>
	</div>
);

export default CollectionPreview;
