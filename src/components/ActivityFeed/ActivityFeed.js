import React from "react";
import './ActivityFeed.css';

export default function ActivityFeed({activityData}) {
  const ActivityElement = ({activity}) => {
    return (
      <div className="followers-element">
      <img src={activity.actor.avatar_url} alt={activity.login}/>
      <div className="field">
          <span>{activity.repo.name}</span>
      </div>
  </div>
    )
  }
  return <div className="activity-panel">
    <h2>Activity Feed</h2>
      {activityData && activityData.length > 0 ? activityData.map(activity => 
          <ActivityElement key={activity.id} activity={activity}/>
      ) : null}
  </div>;
}
