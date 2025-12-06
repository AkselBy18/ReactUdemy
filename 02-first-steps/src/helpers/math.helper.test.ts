import { describe, expect, test } from "vitest";
import { add, divide, multiply, subtract } from "./math.helper";


describe('Add', () => {
    test('Should add tow positive numbers', () => {
        // ! 1. Arrange
        const a = 1;
        const b = 2;

        // ! 2. Act
        const result = add(a, b);

        // ! 3. Assert
        expect(result).toBe(a + b);
    });

    test('Should add tow positive numbers', () => {
        const a = -2;
        const b = -4;
        const result = add(a, b);
        expect(result).toBe(a + b);
    });
});

describe('Subtract', () => {
    test('Should subtract two numbers', () => {
        const a = 5;
        const b = 3;
        const result = subtract(a, b);
        expect(result).toBe(a - b);
    });
    test('Should subtract two negative numbers', () => {
        const a = -5;
        const b = -3;
        const result = subtract(a, b);
        expect(result).toBe(a - b);
    });
});

describe('Multiply', () => {
    test('Should multiply two numbers', () => {
        const a = 4;
        const b = 8;
        const result = multiply(a, b);
        expect(result).toBe(a * b);
    });

    test('Should multiply two numbers', () => {
        const a = 9;
        const b = 18;
        const result = multiply(a, b);
        expect(result).toBe(a * b);
    });
});

describe('divide', () => {
    test('Should divide tow positive numbers', () => {
        const a = 2;
        const b = 4;
        const result = divide(a, b);
        expect(result).toBe(a / b);
    })
});