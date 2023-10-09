import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const {title, photosByTopic} = props

  return (
    <div className="topic-list__item" onClick={photosByTopic}>
      <span>
        {title}
      </span>
    </div>
  );
};

export default TopicListItem;
