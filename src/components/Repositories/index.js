import React from 'react';
import { languageColor } from '../../styles/languages';

import './index.css';
export default function Repositories({ repositoryData, title }) {
  const RepositoryElement = ({ repository }) => {
    return (
      <div className="repository-element">
        <div className="repository-row">
          <span className="title">{repository.name}</span>
        </div>
        <div className="repository-row">
          <span className="subtitle">{repository.description}</span>
        </div>
        <div className="repository-row">
          <span className="subtitle">{repository.language}</span>
          <span
            className="circle"
            style={{ backgroundColor: languageColor[repository.language] }}
          ></span>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h2>{title}</h2>
      <div className="repositories-panel">
        {repositoryData && repositoryData.length > 0
          ? repositoryData.map((repository) => (
              <RepositoryElement key={repository.id} repository={repository} />
            ))
          : null}
      </div>
    </div>
  );
}
