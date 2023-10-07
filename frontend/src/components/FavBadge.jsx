import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ( props ) => {
  const {fav} = props

  return (
    <div className='fav-badge'>
      {fav === true ? <FavIcon selected displayAlert={!!props.isFavPhotoExist} /> : <FavIcon />}
    </div>
  ) 
};

export default FavBadge;