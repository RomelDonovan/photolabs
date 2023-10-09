import React from 'react';
// import { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

const App = () => {
  const {
    state: { modalVisible, fav, photoData, topicData },
    updateToFavPhotoId,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    photosByTopic
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute photoData={photoData} topicData={topicData} setPhotoSelected={setPhotoSelected} fav={fav} updateToFavPhotoId={updateToFavPhotoId} photosByTopic={photosByTopic} />

      {modalVisible && (
        <PhotoDetailsModal modalVisible={modalVisible} setPhotoSelected={setPhotoSelected} photoData={photoData} updateToFavPhotoId={updateToFavPhotoId} fav={fav} onClosePhotoDetailsModal={onClosePhotoDetailsModal} />
      )}
    </div>
  );
};

export default App;