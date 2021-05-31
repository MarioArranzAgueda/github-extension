import React from "react";
import {render} from '@testing-library/react';
import Repositories from './Repositories';

test("Render Repository component", () => {
    const repositoryData = [
        {
            id: 1,
            name: "test",
            description: "description",
            language: 'JavaScript',
        }
    ]
  render(<Repositories repositoryData={repositoryData} />);
});
