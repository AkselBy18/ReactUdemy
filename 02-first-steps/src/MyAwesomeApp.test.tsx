import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { render, screen } from '@testing-library/react'

describe("MyAwesomeApp", () => {
    test('Should render first name and last name', () => {
        const { container } = render(<MyAwesomeApp />);
        //screen.debug();

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');

        expect(h1?.innerHTML).toContain('Aksel');
        expect(h3?.innerHTML).toContain('Herrera');
    });

    test('Should render first name and last name - screen', () => {
        render(<MyAwesomeApp />);
        screen.debug();

        //const h1 = screen.getByRole('heading', {level: 1});
        const h1 = screen.getByTestId('name-title')

        expect(h1.innerHTML).toContain('Aksel');
    });

    test('Should match snapshot', () => {
        const {container} = render(<MyAwesomeApp />);
        expect(container).toMatchSnapshot();
    });

    test('Should match snapshot', () => {
        render(<MyAwesomeApp />);
        expect(screen.getByTestId('div-app')).toMatchSnapshot();
    });
});