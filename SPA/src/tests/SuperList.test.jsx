import React from "react";
import { render, screen } from "@testing-library/react";
import SuperList from "../components/SuperList";
import { MemoryRouter } from "react-router-dom";

describe("SuperList Component", () => {
  const mockHeroes = [
    {
      id: 1,
      name: "Superman",
      biography: { alignment: "good" },
      images: { sm: "superman.jpg" },
    },
    {
      id: 2,
      name: "Batman",
      biography: { alignment: "good" },
      images: { sm: "batman.jpg" },
    },
    {
      id: 3,
      name: "Joker",
      biography: { alignment: "bad" },
      images: { sm: "joker.jpg" },
    },
  ];

  it("renders only heroes with alignment 'good' when filter is applied", () => {
    render(
      <MemoryRouter>
        <SuperList filteredSupers={mockHeroes} filter="good" />
      </MemoryRouter>
    );

    expect(screen.getByText(/Superman/i)).toBeInTheDocument();
    expect(screen.getByText(/Batman/i)).toBeInTheDocument();
    expect(screen.queryByText(/Joker/i)).not.toBeInTheDocument();
  });

  it("renders only heroes with alignment 'bad' when filter is applied", () => {
    render(
      <MemoryRouter>
        <SuperList filteredSupers={mockHeroes} filter="bad" />
      </MemoryRouter>
    );

    expect(screen.getByText(/Joker/i)).toBeInTheDocument();
    expect(screen.queryByText(/Superman/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Batman/i)).not.toBeInTheDocument();
  });

  it("renders all heroes when filter is not 'good' or 'bad'", () => {
    render(
      <MemoryRouter>
        <SuperList filteredSupers={mockHeroes} filter="all" />
      </MemoryRouter>
    );

    expect(screen.getByText(/Superman/i)).toBeInTheDocument();
    expect(screen.getByText(/Batman/i)).toBeInTheDocument();
    expect(screen.getByText(/Joker/i)).toBeInTheDocument();
  });
});
