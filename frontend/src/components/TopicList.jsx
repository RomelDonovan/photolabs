import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  const {topicData, onTopicSelect} = props
  
  return (
    <div className="top-nav-bar__topic-list">
      {topicData.map(topic => <TopicListItem key={topic.id} {...topic} onTopicSelect={onTopicSelect} />)}
    </div>
  );
};

export default TopicList;
