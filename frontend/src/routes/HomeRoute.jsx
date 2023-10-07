import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const {photos, topics, setModalVisible, fav, toggleFav} = props
  

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} fav={fav}/>
      <PhotoList photos={photos} toggleFav={toggleFav} setModalVisible={setModalVisible} fav={fav} />
    </div>
  );
};

export default HomeRoute;
