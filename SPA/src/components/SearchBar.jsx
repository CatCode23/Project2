import React from 'react'
import styled from 'styled-components';


export default function SearchBar({searchName, setSearchName}) {
  const handleSearchChange = (name) => setSearchName(name);
  return (
    
       <SearchInput
        type="text"
        placeholder="Search by hero name..."
        value={searchName}
      onChange={(name) => handleSearchChange(name.target.value)}
      />
  
  )
}



const SearchInput = styled.input`
  padding: 8px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  max-width: 800px;
  display: block;
  margin-bottom: 10px;
  margin-top: 10px;
  background-color: rgba(255, 255, 255, 0.8); 
`;