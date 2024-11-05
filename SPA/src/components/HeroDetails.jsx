import React, { useContext } from "react";
import HeroContext from "./HeroContext";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function HeroDetails() {
  const { id } = useParams();
  let { supers } = useContext(HeroContext);
  const hero = supers.find((superhero) => superhero.id === Number(id));
  console.log("hero data: ", hero);

  if (!hero) {
    return <p>Hero not found</p>;
  } else {
    return (
      <DetailsContainer>
        <PowerstatsCard>
          <h2>Powerstats</h2>
          <ul>
            <li>
              <strong>Intelligence:</strong> {hero.powerstats.intelligence || "NA"}
            </li>
            <li>
              <strong>Strength:</strong> {hero.powerstats.strength || "NA"}
            </li>
            <li>
              <strong>Speed:</strong> {hero.powerstats.speed || "NA"}
            </li>
            <li>
              <strong>Durability:</strong> {hero.powerstats.durability || "NA"}
            </li>
            <li>
              <strong>Power:</strong> {hero.powerstats.power || "NA"}
            </li>
            <li>
              <strong>Combat:</strong> {hero.powerstats.combat || "NA"}
            </li>
          </ul>
        </PowerstatsCard>

        <ConnectionsCard>
          <h2>Connections</h2>
          <p>
            <strong>Organizations:</strong> {hero.connections.groupAffiliation || "NA"}
          </p>
          <p>
            <strong>Relatives:</strong> {hero.connections.relatives || "NA"}
          </p>
        </ConnectionsCard>

        <ImageCard>
          <img src={hero.images.lg} alt={hero.name} />
        </ImageCard>

        <AppearanceCard>
          <h2>Appearance</h2>
          <p>
            <strong>Gender:</strong> {hero.appearance.gender || "NA"}
          </p>
          <p>
            <strong>Race:</strong> {hero.appearance.race || "NA"}
          </p>
          <p>
            <strong>Height:</strong> {hero.appearance.height[0] || "NA"}
          </p>
          <p>
            <strong>Weight:</strong> {hero.appearance.weight[0] || "NA"}
          </p>
        </AppearanceCard>

        <BiographyCard>
          <h2>Biography</h2>
          <p>
            <strong>Full Name:</strong> {hero.biography.fullName || "NA"}
          </p>
          <p>
            <strong>Place of Birth:</strong> {hero.biography.placeOfBirth || "NA"}
          </p>
          <p>
            <strong>Publisher:</strong> {hero.biography.publisher || "NA"}
          </p>
        </BiographyCard>
      </DetailsContainer>
    );
  }
}

const DetailsContainer = styled.div`
  display: grid;
  grid-template-areas:
    "powerstats image"
    "connections image"
    "appearance biography";
  gap: 2vw;
  width: 100vw; 
  height: 100vh; 
  margin: 0 auto; 
  padding: 2vw;
  background-image: url('/images/background.jpg'); 
  background-size: contain;
  font-family: 'Comic Sans MS', cursive, sans-serif; 
  overflow: auto;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: center;  
border: 2px solid #C70039; 
  border-radius: 8px;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.8); 
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
  width: 100%;
  font-size: 1.2rem;
`;

const PowerstatsCard = styled(Card)`
  grid-area: powerstats;
  text-align: center;
   h2 {
    font-size: 1.5rem; 
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0 auto;
    display: inline-block;
    text-align: left;
  }
     li {
      font-size: 1.1rem; 
    }
`;

const ConnectionsCard = styled(Card)`
  grid-area: connections;
`;

const ImageCard = styled(Card)`
  grid-area: image;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%; 
    border-radius: 8px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
  }
`;

const AppearanceCard = styled(Card)`
  grid-area: appearance;
`;

const BiographyCard = styled(Card)`
  grid-area: biography;
`;