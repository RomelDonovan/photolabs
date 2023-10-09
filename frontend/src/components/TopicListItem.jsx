import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const {title, onTopicSelect} = props

  return (
    <div className="topic-list__item" onClick={() => onTopicSelect(props.id)}>
      <span>
        {title}
      </span>
    </div>
  );
};

export default TopicListItem;
