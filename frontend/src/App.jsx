import React from 'react';
import { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [fav, setFav] = useState([]);

  const toggleFav = (photoId) => {
    if (fav.includes(photoId)) {
      const copyFavArr = [...fav].filter(favPhotoId => favPhotoId !== photoId)
      setFav(copyFavArr);
      return;
    }
    setFav(prev => [...prev, photoId]);
  }

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} setModalVisible={setModalVisible} fav={fav} toggleFav={toggleFav} />

      {modalVisible && (
        <PhotoDetailsModal modalVisible={modalVisible} setModalVisible={setModalVisible} photos={photos} toggleFav={toggleFav} fav={fav} />
      )}
    </div>
  );
};

export default App;