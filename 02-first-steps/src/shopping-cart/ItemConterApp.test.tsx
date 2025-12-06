import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounterApp } from "./ItemCounterApp";

describe('ItemCounterApp', () => {
    test('Should render with default values', () => {
        const name = 'Test item';

        render(<ItemCounterApp name={name} />);

        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(name)).not.toBeNull();
    });

    test('Should render with default values', () => {
        const name = 'Test item';
        const quantity = 10;

        render(<ItemCounterApp name={name} quantity={quantity} />);

        expect(screen.getByText(quantity)).toBeDefined();
    });


    test('Should increase count when +1 button is clicked', () => {
        render(<ItemCounterApp name={'Test item'} quantity={1} />);

        const [buttonAdd] = screen.getAllByRole('button');

        fireEvent.click(buttonAdd);

        expect(screen.getByText('2')).toBeDefined();
    });

    test('Should decrease count when -1 button is clicked', () => {
        const quantity = 5;
        render(<ItemCounterApp name={'Test item'} quantity={quantity} />);

        const [, buttonSubtract] = screen.getAllByRole('button');

        fireEvent.click(buttonSubtract);

        expect(screen.getByText('4')).toBeDefined();
    });

    test('Should decrease count when -1 button is clicked', () => {
        const quantity = 1;
        render(<ItemCounterApp name={'Test item'} quantity={quantity} />);

        const [, buttonSubtract] = screen.getAllByRole('button');

        fireEvent.click(buttonSubtract);

        expect(screen.getByText('1')).toBeDefined();
    });

    test('Should show red when count is 1', () => {
        const quantity = 1;
        const name = 'Test item'
        render(<ItemCounterApp name={name} quantity={quantity} />);

        const itemText = screen.getByText(name);
        expect(itemText.style.color).toBe('red');
    });

    test('Should show black when count is greater than 1', () => {
        const quantity = 2;
        const name = 'Test item'
        render(<ItemCounterApp name={name} quantity={quantity} />);

        const itemText = screen.getByText(name);
        expect(itemText.style.color).toBe('black');
    });
});