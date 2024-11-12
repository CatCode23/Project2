import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function RandomHeroButton() {
  const navigate = useNavigate();

  const handleRandomHero = () => {
    const randomId = Math.floor(Math.random() * 563) + 1; 
    navigate(`/details/${randomId}`);
    console.log("hero ID", randomId)
  };
  

  return (
    <StyledButton onClick={handleRandomHero}>Random Hero</StyledButton>
  );
}

export default RandomHeroButton;

const StyledButton = styled.button`
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  padding: 8px;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  border: none;
  cursor: pointer;
  &:hover {
    color: #def;
  }
  &:focus {
    outline: none;
  }
  &:active {
    text-decoration: underline;
  }
`;