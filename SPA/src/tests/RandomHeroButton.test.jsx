import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent} from "@testing-library/react";
import App from "../App";
import RandomHeroButton from "../components/RandomHeroButton";

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
