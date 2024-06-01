import { render, fireEvent } from "@testing-library/react";
import { Counter } from "./Counter";
import { act } from "react";

describe(Counter, () => {
  it("Counter display correct initial count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const preValue = Number(getByTestId("counter").textContent);
    expect(preValue).toEqual(0);
  });

  it("Counter SHoul Increment by 1 if the increment button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incrementBtn = getByRole("button", { name: "Increment" });
    fireEvent.click(incrementBtn);
    const preValue = Number(getByTestId("counter").textContent);
    expect(preValue).toEqual(1);
  });

  it("Counter SHould decrement by 1", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const decrement = getByRole("button", { name: "Decrement" });
    fireEvent.click(decrement);
    const preValue = Number(getByTestId("counter").textContent);
    expect(preValue).toEqual(-1);
  });

  it("Counter should Restart the value", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
    const restartBtn = getByRole("button", { name: "Restart" });
    fireEvent.click(restartBtn);
    const preValue = Number(getByTestId("counter").textContent);
    expect(preValue).toEqual(0);
  });

  it("Counter SHould change the Sign", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
    const switchBtn = getByRole("button", { name: "Switch Sign" });
    fireEvent.click(switchBtn);
    const preValue = Number(getByTestId("counter").textContent);
    expect(preValue).toEqual(-50);
  });
});
