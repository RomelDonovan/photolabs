import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { photoData, topicData, setPhotoSelected, fav, updateToFavPhotoId, onTopicSelect } = props


  return (
    <div className="home-route">
      <TopNavigationBar topicData={topicData} fav={fav} onTopicSelect={onTopicSelect} />
      
      <PhotoList photoData={photoData} updateToFavPhotoId={updateToFavPhotoId} setPhotoSelected={setPhotoSelected} fav={fav} />
    </div>
  );
};

export default HomeRoute;
