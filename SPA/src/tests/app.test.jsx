import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";
import SearchBar from "../components/SearchBar";
import SuperList from "../components/SuperList";

describe("App", () => {
  it("renders the App component", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // screen.debug();
  });
});

describe("SearchBar Unit Test", () => {
  it("should update the search name when the input value changes", () => {
    const mockSetSearchName = vi.fn();
    render(<SearchBar searchName="" setSearchName={mockSetSearchName} />);

    const searchInput = screen.getByPlaceholderText("Search by hero name...");
    fireEvent.change(searchInput, { target: { value: "Batman" } });

    expect(mockSetSearchName).toHaveBeenCalledWith("Batman");
  });
  it("should not call setSearchName when the input value is empty", () => {
    const mockSetSearchName = vi.fn();
    render(<SearchBar searchName="" setSearchName={mockSetSearchName} />);

    const searchInput = screen.getByPlaceholderText("Search by hero name...");
    fireEvent.change(searchInput, { target: { value: "" } });

    expect(mockSetSearchName).not.toHaveBeenCalled();
  });
});


