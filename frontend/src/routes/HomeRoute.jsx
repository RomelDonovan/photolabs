import React from 'react';
import { useState } from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import PhotoDetailsModal from './PhotoDetailsModal';

const HomeRoute = (props) => {
  const photos = props.photos
  const topics = props.topics
  const [fav, setFav] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} fav={fav} />
      <PhotoList photos={photos}
        setFav={setFav}
        setModalVisible={setModalVisible} />
        {modalVisible && <PhotoDetailsModal/>}
    </div>
  );
};

export default HomeRoute;
