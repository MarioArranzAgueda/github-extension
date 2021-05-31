import React from "react";
import './UserInfo.css';

export default function UserInfo({userData, repoData}) {
    const {avatar_url, followers, following, login, name, url} = userData;
    

    return (
      <div className="user-info">
          <div className="image-profile">
            {avatar_url ? (
                <a href={url}><img src={avatar_url} alt="url" /></a>
                ) : null}
            <div className="info-profile">
                { login && <p className="info">UserName:<b>{login}</b></p> }
                { name && <p className="info">Name:<b>{name}</b></p> }
            </div>
        </div>
        <div className="info-profile">
            {
                followers && <p className="info">Followers:<b>{followers}</b></p>
            }
            {
                following && <p className="info">Following:<b>{following}</b></p>
            }
        </div>
        <div className="info-profile">
            {
                repoData && <p className="info">Repositories<b>{repoData.length}</b></p>
            }
            
        </div>
      </div>
    );
}