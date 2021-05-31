import React from "react";
import "./Followers.css";

export default function Followers({ followersData }) {
  const FollowerElement = ({ follower }) => {
    return (
      <div className="followers-element">
        <img src={follower.avatar_url} alt={follower.login} />
        <div className="field">
          <label>UserName: </label>
          <span>{follower.login}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="followes-panel">
      <h2>Followers</h2>
      {followersData.length > 0
        ? followersData.map((follower) => (
            <FollowerElement key={follower.id} follower={follower} />
          ))
        : null}
    </div>
  );
}
