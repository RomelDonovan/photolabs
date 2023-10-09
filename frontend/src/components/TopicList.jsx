import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  const {topicData, photosByTopic} = props
  
  return (
    <div className="top-nav-bar__topic-list">
      {topicData.map(topic => <TopicListItem key={topic.id} {...topic} photosByTopic={() => photosByTopic(topic.id)} />)}
    </div>
  );
};

export default TopicList;
