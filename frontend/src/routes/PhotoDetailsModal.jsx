import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { modalVisible, setPhotoSelected, updateToFavPhotoId, fav, onClosePhotoDetailsModal, photoData } = props

  const similarPhotos = Object.values(modalVisible.similar_photos);

  const similarPhotosWithDetails = similarPhotos.map(photo => {
    const photoObj = photoData.find(ph => ph.id === photo.id);
    return photoObj;
  })

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button"
        onClick={onClosePhotoDetailsModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__top-bar">
        <div className="photo-details-modal__images">
          <PhotoFavButton updateToFavPhotoId={updateToFavPhotoId} fav={fav} photoId={modalVisible.id} />
          <img src={modalVisible.urls.full} className="photo-details-modal__image" />

          <div className="photo-details-modal__photographer-details">
            <img
              src={modalVisible.user.profile}
              className="photo-details-modal__photographer-profile"
            />
            <div className="photo-details-modal__photographer-info">
              <span>{modalVisible.user.name}</span>
              <br />
              <span className="photo-details-modal__photographer-location">
                {modalVisible.location.city}, {modalVisible.location.country}
              </span>
            </div>
          </div>

          <div className="photo-details-modal__header">
            <h3>Similar Photos</h3>
            <PhotoList photoData={similarPhotosWithDetails} updateToFavPhotoId={updateToFavPhotoId} setPhotoSelected={setPhotoSelected} fav={fav} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
