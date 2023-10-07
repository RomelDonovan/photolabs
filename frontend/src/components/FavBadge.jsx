import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {
  const { isFavPhotoExist } = props

  return (
    <div className='fav-badge'>
      <FavIcon selected={isFavPhotoExist} displayAlert={!!isFavPhotoExist} />
    </div>
  )
};

export default FavBadge;