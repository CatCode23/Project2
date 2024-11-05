import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';



export default function HeroList({filteredSupers}) {
    const goodHeroes = filteredSupers.filter((superhero) => superhero.biography.alignment === "good");
  return (
    <Container>
      
      
      <ListContainer>
        {goodHeroes.map((superhero) => (
        <StyledLink key={superhero.id} to ={`/details/${superhero.id}`}>
          <Card>
            <Image src={superhero.images.sm} alt={superhero.name}/>
            <h2>{superhero.name}</h2>
          </Card>
          </StyledLink>
        ))}
        </ListContainer>
    </Container>
  )
}

const Container = styled.div`
text-align: center;
padding: 20px; 
  background-image: url('/images/background.jpg'); 
  background-size: contain;
`;
const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  justify-content: center; 
  padding: 20px;
`;

const Card = styled.div`
  text-align: center;
  width: 250px;
  height: 300px; 
   display: flex; 
  flex-direction: column; 
  justify-content: space-between;
  border: 2px solid #C70039;  
  border-radius: 8px;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.7); 
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; 
`;
const Image = styled.img`
  max-width: 100%; 
  max-height: 200px; 
  object-fit: contain; 
  border-radius: 4px; 
`;