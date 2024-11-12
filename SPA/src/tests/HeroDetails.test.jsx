import { render, screen } from "@testing-library/react";
import HeroDetails from "../components/HeroDetails";
import HeroContext from "../components/HeroContext";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, it } from "vitest";

describe("HeroDetails component", () => {
  const mockHero = [
    {
      id: 496,
      name: "Superman",
      powerstats: {
        intelligence: 94,
        strength: 100,
        speed: 100,
        durability: 100,
        power: 100,
        combat: 85,
      },
      connections: {
        groupAffiliation:
          "Justice League of America, The Legion of Super-Heroes (pre-Crisis as Superboy); Justice Society of America (pre-Crisis Earth-2 version); All-Star Squadron (pre-Crisis Earth-2 version)",
        relatives:
          "Lois Lane (wife), Jor-El (father, deceased), Lara (mother, deceased), Jonathan Kent (adoptive father), Martha Kent (adoptive mother), Seyg-El (paternal grandfather, deceased), Zor-El (uncle, deceased), Alura (aunt, deceased), Supergirl (Kara Zor-El, cousin), Superboy (Kon-El/Conner Kent, partial clone)",
      },
      images: {
        lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/644-superman.jpg",
      },
      appearance: {
        gender: "Male",
        race: "Kryptonian",
        height: ["6'3"],
        weight: ["225 lbs"],
      },
      biography: {
        placeOfBirth: "Krypton",
        firstAppearance: "ACTION COMICS #1",
        publisher: "Superman Prime One-Million",
      },
    }
  ];

  const renderComponent = (initialEntries, contextValue) => {
    return render(
      <HeroContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={initialEntries}>
          <Routes>
            <Route path="/details/:id" element={<HeroDetails />} />
          </Routes>
        </MemoryRouter>
      </HeroContext.Provider>
    );
  };

it("renders hero details if hero exists", () => {
    renderComponent(["/details/496"], {supers: mockHero });

    expect(screen.getByText(/ACTION COMICS/i)).toBeInTheDocument();
    expect(screen.getByText(/Intelligence:/i)).toBeInTheDocument();
    expect(screen.getByText(/94/i)).toBeInTheDocument();
});

it("renders 'Hero not found' when hero does not exist", () => {
  renderComponent(["/details/1"], { supers: mockHero });

  const noHeroMessage = screen.getByText(/Hero not found/i);
  expect(noHeroMessage).toBeInTheDocument();
});

it("renders 'NA' for null powerstats", () => {
  const incompleteHero = [
    {
      id: 497,
      name: "Superman",
      powerstats: {
        intelligence: 94,
        strength: null, //should return "NA"
        speed: 100,
        durability: 100,
        power: 100,
        combat: 85,
      },
      connections: {
        groupAffiliation:
          "Justice League of America, The Legion of Super-Heroes (pre-Crisis as Superboy); Justice Society of America (pre-Crisis Earth-2 version); All-Star Squadron (pre-Crisis Earth-2 version)",
        relatives:
          "Lois Lane (wife), Jor-El (father, deceased), Lara (mother, deceased), Jonathan Kent (adoptive father), Martha Kent (adoptive mother), Seyg-El (paternal grandfather, deceased), Zor-El (uncle, deceased), Alura (aunt, deceased), Supergirl (Kara Zor-El, cousin), Superboy (Kon-El/Conner Kent, partial clone)",
      },
      images: {
        lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/644-superman.jpg",
      },
      appearance: {
        gender: "Male",
        race: "Kryptonian",
        height: ["6'3"],
        weight: ["225 lbs"],
      },
      biography: {
        placeOfBirth: "Krypton",
        firstAppearance: "ACTION COMICS #1",
        publisher: "Superman Prime One-Million",
      },
    }
  ];

  renderComponent(["/details/497"], { supers: incompleteHero });

  expect(screen.getByText(/Intelligence:/i)).toBeInTheDocument();
  expect(screen.getByText(/94/i)).toBeInTheDocument();
  expect(screen.getByText(/Strength:/i)).toBeInTheDocument();
  expect(screen.getByText("NA")).toBeInTheDocument();
});

});