import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ( props ) => {
  return (
    <div className='fav-badge'>
      {props.fav ? <FavIcon selected displayAlert={!!props.isFavPhotoExist} /> : <FavIcon />}
    </div>
  ) 
};

export default FavBadge;