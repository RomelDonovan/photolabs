import React from 'react';
// import { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';

const App = () => {
  const {
    state: { modalVisible, fav },
    setModalVisible,
    toggleFav,
    closeModal
  } = useApplicationData();


  // const [modalVisible, setModalVisible] = useState(false);
  // const [fav, setFav] = useState([]);

  // const toggleFav = (photoId) => {
  //   if (fav.includes(photoId)) {
  //     const copyFavArr = [...fav].filter(favPhotoId => favPhotoId !== photoId)
  //     setFav(copyFavArr);
  //     return;
  //   }
  //   setFav(prev => [...prev, photoId]);
  // }

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} setModalVisible={setModalVisible} fav={fav} toggleFav={toggleFav} />

      {modalVisible && (
        <PhotoDetailsModal modalVisible={modalVisible} setModalVisible={setModalVisible} photos={photos} toggleFav={toggleFav} fav={fav} closeModal={closeModal} />
      )}
    </div>
  );
};

export default App;