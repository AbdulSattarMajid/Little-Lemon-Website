import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Reservation from "../src/components/Reservation";


describe("Reservation Form", () => {
  test("renders the reservation form", () => {
    render(<Reservation/>);
    expect(screen.getByText(/Reserve Your Table/i)).toBeInTheDocument();
  });

  test("allows users to enter their name", () => {
    render(<Reservation />);
    const nameInput = screen.getByPlaceholderText("Your Name");
    fireEvent.change(nameInput, { target: { value: "AbdulSattar" } });
    expect(nameInput.value).toBe("AbdulSattar");
  });

  test("allows users to enter email", () => {
    render(<Reservation />);
    const emailInput = screen.getByPlaceholderText("Your Email");
    fireEvent.change(emailInput, { target: { value: "abc@example.com" } });
    expect(emailInput.value).toBe("abc@example.com");
  });

  test("allows users to select a date", () => {
    render(<Reservation />);
    const dateInput = screen.getByLabelText("Date");
    fireEvent.change(dateInput, { target: { value: "2024-12-25" } });
    expect(dateInput.value).toBe("2024-12-25");
  });

  test("displays error if form is submitted without filling required fields", () => {
    render(<Reservation />);
    const submitButton = screen.getByText("Reserve Now");
    fireEvent.click(submitButton);
    expect(screen.getByText(/Please fill in all fields/i)).toBeInTheDocument();
  });

  test("shows success message when form is correctly submitted", () => {
    render(<Reservation />);
    fireEvent.change(screen.getByPlaceholderText("Your Name"), {
      target: { value: "AbdulSattar" },
    });
    fireEvent.change(screen.getByPlaceholderText("Your Email"), {
      target: { value: "abc@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Date"), {
      target: { value: "2024-12-25" },
    });

    const submitButton = screen.getByText("Reserve Now");
    fireEvent.click(submitButton);
    expect(screen.getByText(/Reservation successful/i)).toBeInTheDocument();
  });
});
