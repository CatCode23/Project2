import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent} from "@testing-library/react";
import App from "../App";
import SearchBar from "../components/SearchBar";

describe("App", () => {
  it("renders the App component", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
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


