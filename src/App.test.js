import React from "react";
import { render, screen } from '@testing-library/react';
import {App} from './App';

describe('App', () => {
    test("check user constant is empty", () => {
        localStorage.setItem('user', 'test')
        render(<App />);
        const section = screen.getByTestId("content");
        expect(section).toBeInTheDocument();
    });
    
});