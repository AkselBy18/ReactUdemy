import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
import { ItemCounterApp } from "./shopping-cart/ItemCounterApp";

const mockItemCounter = vi.fn((_props: unknown) => {
    return (
        <div data-testid="ItemCounter" />
    );
});

vi.mock('./shopping-cart/ItemCounterApp', () => ({
    ItemCounterApp: (props: unknown) => mockItemCounter(props)
}));

/* vi.mock('./shopping-cart/ItemCounterApp', () => ({
    ItemCounterApp: (props: unknown) => 
    <div data-testid="itemCounter"
        name={props.name}
        quantity={props.quantity}
    />
})); */

describe("FirstStepsApp", () => {

    afterEach(() => {
        vi.clearAllMocks();
    });

    test('Should match snapshot', () => {
        const { container } = render(<FirstStepsApp />);
        expect(container).toMatchSnapshot();
        //screen.debug();
    });

    test('Should render the correct number of ItemCounter component', () => {
        render(<FirstStepsApp />);
        const itemCounters = screen.getAllByTestId('ItemCounter');
        expect(itemCounters.length).toBe(3);
    });

    test('Should render ItemCounter with correct props', () => {
        render(<FirstStepsApp />);
        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith(
            { name: 'Nintento Switch 2', quantity: 3 },
        );
        expect(mockItemCounter).toHaveBeenCalledWith(
            { name: 'Pro controler', quantity: 1 },
        );
        expect(mockItemCounter).toHaveBeenCalledWith(
            { name: 'PS2 512GB', quantity: 2 },
        );
    });
});