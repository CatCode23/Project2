import { useState, useEffect, createContext } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import SuperList from "./components/SuperList.jsx";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import HeroDetails from "./components/HeroDetails";
import HeroList from "./components/HeroList";
import VillainList from "./components/VillainList";
import HeroContext from "./components/HeroContext";

function App() {
  const [supers, setSupers] = useState([]);
  const [searchName, setSearchName] = useState("");
  const value = { supers };
  const location = useLocation();
 
  useEffect(() => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then((response) => response.json())
      .then((data) => setSupers(data));
  }, []);

  //filters heros based on matching characters typed into search bar and found in superhero name
  const filteredSupers = supers.filter((superhero) =>
    superhero.name.toLowerCase().includes(searchName.toLowerCase())
  );

  if (!supers) {
    return <h1>Loading heroes...</h1>;
  } else {
    return (
      <>
        <HeroContext.Provider value={value}>
          <Navbar />
          {location.pathname.includes("/details/") ? null : (
            <SearchBar searchName={searchName} setSearchName={setSearchName} />
          )}
          <Routes>
            <Route
              path="/Heroes"
              element={<HeroList filteredSupers={filteredSupers} />}
            />
            <Route
              path="/Villains"
              element={<VillainList filteredSupers={filteredSupers} />}
            />
            <Route
              path="/"
              element={<SuperList filteredSupers={filteredSupers} />}
            />
            <Route path="/details/:id" element={<HeroDetails />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </HeroContext.Provider>
      </>
    );
  }
}
export default App;
