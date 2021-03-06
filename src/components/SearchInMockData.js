import React, { useState } from 'react';
import { Input, TextField } from '@material-ui/core';
import MOCK_DATA from '../data/MOCK_DATA.json'

export default function SearchInMockData() {
  // Declare a new state variable, which we'll call "count"
  const [searchTerm, setSearchTerm] = useState('');
  console.log(searchTerm)
  return (
    <div style={{backgroundColor: "#aaaf", width: '18rem' }}>
      <p>mock data filter search</p>
      <Input type="text" onChange={e => {setSearchTerm(e.target.value)}} placeholder='search in mock data...' />
      {
        MOCK_DATA.map((data, key) => {
          if ({searchTerm} == '') return
          else if (data.first_name.toLowerCase().includes(searchTerm.toLowerCase()))
            return <div>{data.first_name}</div>
        }
      )}
    </div>
  );
}