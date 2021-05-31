import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import FormUser from './FormUser';
import userEvent from "@testing-library/user-event";
describe('FormUser', () => {
    test("Check if input has type text", () => {
        const handleClick = jest.fn()
        render(<FormUser submit={handleClick} />);
        const input = screen.getByTestId('user-input');
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("type", "text");
    });
    test("check if input has some text", () => {
        const handleClick = jest.fn()
        render(<FormUser submit={handleClick} />);
        const input = screen.getByTestId('user-input');
        userEvent.type(input, "test");
        expect(screen.getByTestId("user-input")).toHaveValue("test");
    });
    test("check if input has some text", () => {
        const handleClick = jest.fn()
        render(<FormUser submit={handleClick} />);
        fireEvent.click(screen.getByTestId("user-button"));
        expect(handleClick).toHaveBeenCalledTimes(1)
    });
});