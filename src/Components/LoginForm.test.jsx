import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import LoginForm from "../Components/LoginForm";

describe("LoginForm testing", () => {
    test("Title must be rendered", () => {
       render(<LoginForm/>)
       const title = screen.getByText(/debe logUeaRse/i)
       expect(title).toBeDefined()
    })
    test("should render first input", () => {
        render(<LoginForm/>)
        const input = screen.getByRole('email')
        expect(input).toBeDefined()
    })
    test('should render second input', () => {
        render(<LoginForm/>)
        const input = screen.getByTestId('password')
        fireEvent.change(input, {target: {value :"contraseña123"}})
        expect(input.value).toBe("contraseña123")
    })
    test('should click button', () => {
        const handleClick = vi.fn()
        render(<LoginForm handleClick={handleClick}/>)
        const button = screen.getByText("Enviar")
        fireEvent.click(button)
        expect(handleClick).toBeCalledTimes(1)
    })
})
