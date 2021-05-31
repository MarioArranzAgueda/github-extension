import React from "react";
import './Repositories.css';
export default function Repositories({repositoryData}) {

  const RepositoryElement = ({repository}) => {
    return (
        <div className="repository-element">
            <div className="field">
                <span>{repository.name}</span>
                <span>{repository.language}</span>

            </div>
        </div>
    )
  }

  return <div className="repositories-panel">
     <h2>Repositories</h2>
        {repositoryData && repositoryData.length >0 ? repositoryData.map(repository => 
            <RepositoryElement key={repository.id} repository={repository}/>
        ) : null}
    </div>;
}
