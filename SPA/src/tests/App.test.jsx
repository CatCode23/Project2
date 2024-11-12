import { describe, it } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { render} from "@testing-library/react";
import App from "../App";

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
  