import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { CustomHeader } from "./CustomHeader";

describe('CustomHeader', () => {
    const title = 'Custom title';
    
    test('Should render the title correctly', () => {
        render(<CustomHeader title={title} />)
        expect(screen.getByText(title)).toBeDefined();
    });

    test('Should render the description when provide', () => {
        const description = 'Header description';
        render(<CustomHeader title={title} description={description} />)
        //expect(describe).toBeDefined();
        expect(screen.getByRole('paragraph')).toBeDefined();
        //expect(screen.getByRole('paragraph').innerHTML).toBe(description);
    });

    test('Should not render description when not provide', () => {
        const {container} = render(<CustomHeader title={title}/>)
        const divElement = container.querySelector('.content-center');
        const h1 = divElement?.querySelector('h1');
        const p = divElement?.querySelector('p');
        expect(h1?.innerHTML).toBe(title);
        expect(p).toBeNull();
    });
})