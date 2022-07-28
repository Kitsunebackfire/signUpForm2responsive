import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../Form";

describe("different parts of form are rendering on screen", () => {
  test("service message container renders", () => {
    render(<Form />);
    const divElement = screen.getByText(/This is not a real online service/i);
    expect(divElement).toBeInTheDocument();
  });
  test("all 6 different FormInput.js components render", () => {
    render(<Form />);
    const firstNameInput = screen.getByPlaceholderText(/John/i);
    const lastNameInput = screen.getByPlaceholderText(/Doe/i);
    const emailInput = screen.getByPlaceholderText(/email@gmail.com/i);
    const phoneInput = screen.getByPlaceholderText(/1234567890/);
    const passInput = screen.getByPlaceholderText(/enter a password/i);
    const confirmPassInput = screen.getByPlaceholderText(/reenter password/i);
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(passInput).toBeInTheDocument();
    expect(confirmPassInput).toBeInTheDocument();
  });
  test("createAccount area renders", () => {
    render(<Form />);
    const buttonElement = screen.getByRole("button", {
      name: /create account/i,
    });
    const divElement = screen.getByText(/Already have an account/i);
    expect(buttonElement).toBeInTheDocument();
    expect(divElement).toBeInTheDocument();
  });
  test("footer link icons render", () => {
    render(<Form />);
    const linktreeIcon = screen.getByTestId("linkTreeLink");
    const githubIcon = screen.getByTestId("githubLink");
    expect(linktreeIcon).toBeInTheDocument();
    expect(githubIcon).toBeInTheDocument();
  });
});

describe("input fields work", () => {
  test("first name input field accepts text input", () => {
    render(<Form />);
    const firstNameInput = screen.getByPlaceholderText(/John/i);
    fireEvent.change(firstNameInput, { target: { value: "Kurtis" } });
    expect(firstNameInput.value).toBe("Kurtis");
    // had to test for .value otherwise circular error would occur
  });
  test("last name input field accepts text input", () => {
    render(<Form />);
    const lastNameInput = screen.getByPlaceholderText(/Doe/i);

    fireEvent.change(lastNameInput, { target: { value: "Ivey" } });
    expect(lastNameInput.value).toBe("Ivey");
  });
  test("email input field accepts text input", () => {
    render(<Form />);
    const emailInput = screen.getByPlaceholderText(/email@gmail.com/i);
    fireEvent.change(emailInput, {
      target: { value: "javascriptDreams@gmail.com" },
    });
    expect(emailInput.value).toBe("javascriptDreams@gmail.com");
  });
  test("phone number input field accepts text input", () => {
    render(<Form />);
    const phoneInput = screen.getByPlaceholderText(/1234567890/i);
    fireEvent.change(phoneInput, {
      target: { value: 1112223333 },
    });
    expect(phoneInput.value).toBe("1112223333");
  });
  test("password input field accepts text input", () => {
    render(<Form />);
    const passInput = screen.getByPlaceholderText(/enter a password/i);
    fireEvent.change(passInput, { target: { value: "password" } });
    expect(passInput.value).toBe("password");
  });
  test("confirm password input field accepts text input", () => {
    render(<Form />);
    const confirmPassInput = screen.getByPlaceholderText(/reenter password/i);
    fireEvent.change(confirmPassInput, {
      target: { value: "confirmation password" },
    });
    expect(confirmPassInput.value).toBe("confirmation password");
  });
});

describe("password validation", () => {
  test("when password fields have the same value, passwords match displays", () => {
    render(<Form />);
    const passInput = screen.getByPlaceholderText(/enter a password/i);
    const confirmPassInput = screen.getByPlaceholderText(/reenter password/i);
    fireEvent.change(passInput, { target: { value: "match" } });
    fireEvent.change(confirmPassInput, { target: { value: "match" } });
    expect(passInput.value).toBe("match");
    expect(confirmPassInput.value).toBe("match");
    const passwordMessage = screen.getAllByText(/passwords match/i);
    // two "passwords match" should be shown on the screen
    expect(passwordMessage.length).toBe(2);
  });
  test("when password fields don't have the same value, ** Passwords Do Not Match displays", () => {
    render(<Form />);
    const passInput = screen.getByPlaceholderText(/enter a password/i);
    const confirmPassInput = screen.getByPlaceholderText(/reenter password/i);
    fireEvent.change(passInput, { target: { value: "no match" } });
    fireEvent.change(confirmPassInput, { target: { value: "match" } });
    expect(passInput.value).toBe("no match");
    expect(confirmPassInput.value).toBe("match");
    const passwordMessage = screen.getAllByText(/Passwords Do not match/i);
    // two "passwords match" should be shown on the screen
    expect(passwordMessage.length).toBe(2);
  });
  test("when password fields are empty, does not show any password message", () => {
    render(<Form />);

    const passInput = screen.getByPlaceholderText(/enter a password/i);
    const confirmPassInput = screen.getByPlaceholderText(/reenter password/i);
    fireEvent.change(passInput, { target: { value: "" } });
    fireEvent.change(confirmPassInput, { target: { value: "" } });
    expect(passInput.value).toBe("");
    expect(confirmPassInput.value).toBe("");
    const passwordMessage1 = screen.queryAllByText(/passwords match/i);
    const passwordMessage2 = screen.queryAllByText(/Passwords Do not match/i);
    expect(passwordMessage1.length).toBe(0);
    expect(passwordMessage2.length).toBe(0);
  });
});
