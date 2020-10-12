import React from "react";

export default function GitHubUserPanel(props) {
  const printData = props.userData ? (
    <div>
      <img src={props.userData.avatar_url} alt="url" />
    </div>
  ) : null;
  return (
    <div>
      <h2>GitHubUserPanel</h2>
      {printData}
    </div>
  );
}
