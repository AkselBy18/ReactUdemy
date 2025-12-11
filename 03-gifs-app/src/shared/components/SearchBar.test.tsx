import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { SearchBar } from "./SearchBar";

describe('SearchBar', () => {
    test('Should render SearchBar correctly', () => {
        const { } = render(<SearchBar onQuery={() => { }} />);
        expect(screen.getByRole('textbox')).toBeDefined();
        expect(screen.getByRole('button')).toBeDefined();
    });

    test('Should call onQuey with the correct value after 700ms', async () => {
        const onQuey = vi.fn();
        render(<SearchBar onQuery={onQuey} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });

        await waitFor(() => {
            expect(onQuey).toHaveBeenCalled();
            expect(onQuey).toHaveBeenCalledWith('test');
        });
    });

    test('Should call only once with de las value (debounce)', async () => {
        const onQuey = vi.fn();
        render(<SearchBar onQuery={onQuey} />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 't' } });
        fireEvent.change(input, { target: { value: 'te' } });
        fireEvent.change(input, { target: { value: 'tes' } });
        fireEvent.change(input, { target: { value: 'test' } });

        await waitFor(() => {
            expect(onQuey).toHaveBeenCalledTimes(1);
            expect(onQuey).toHaveBeenCalledWith('test');
        });
    });

    test('Should call onQuery when button click with input value', () => {
        const onQuey = vi.fn();
        render(<SearchBar onQuery={onQuey} />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });


        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(onQuey).toBeCalledTimes(1);
        expect(onQuey).toBeCalledWith('test');
    });


    test('Should the input has the correct placeholder value', () => {
        const value = 'Buscar gif'
        const onQuey = vi.fn();
        render(<SearchBar onQuery={onQuey} placeholder={value}/>);
        expect(screen.getByPlaceholderText(value)).toBeDefined();
    });
});