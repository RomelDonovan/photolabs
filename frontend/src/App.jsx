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

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} setModalVisible={setModalVisible} />
      {modalVisible && (
        <PhotoDetailsModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      )}
    </div>
  );
};

export default App;