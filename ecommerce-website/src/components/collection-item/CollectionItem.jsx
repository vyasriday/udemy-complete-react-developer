import React from 'react';
import CustomButton from '../custom-button/CustomButton';

const CollectionItem = ({ id, name, price, imageUrl }) => (
	<div className='collection-item'>
		<div
			className='image'
			style={{
				background: `url(${imageUrl})`,
			}}
		></div>
		<div className='collection-footer'>
			<span className='name'>{name}</span>
			<span className='price'>{price}</span>
		</div>
		<CustomButton inverted> Add to Cart</CustomButton>
	</div>
);

export default CollectionItem;
