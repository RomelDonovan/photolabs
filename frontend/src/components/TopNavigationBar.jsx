import React from 'react';
import TopicList from 'components/TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  const {topicData, fav, photosByTopic} = props

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicData={topicData} photosByTopic={photosByTopic} />
      <FavBadge isFavPhotoExist={fav.length > 0}/>
    </div>
  )
}

export default TopNavigation;