import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import photos from 'mocks/photos';

const PhotoDetailsModal = (props) => {
  // const [...data] = props.photos.map(photo => photo);
  const handleClick = () => {
    props.setModalVisible(false);
  }
  // console.log(props.photos[0].similar_photos);
  // console.log(props.photos[0].urls.regular)

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__top-bar'>
        <img src={props.photos[1].urls.regular} alt="" className="photo-details-modal__image" />
      </div>
      <div className="photo-details-modal__photographer-details">
        <img src={props.photos[0].user.profile} alt="" className="photo-details-modal__photographer-profile" />
        <p className="photo-details-modal__photographer-info">
          {props.photos[0].user.name}
          <span className="photo-details-modal__photographer-location">
            {props.photos[0].location.city}, {props.photos[0].location.country}
          </span>
        </p>
      </div>
      <div className='photo-details-modal__header'>
        <h3>Similar Photos</h3>
        <img src={props.photos[0].urls.regular} alt="" className="photo-details-modal__images" />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
