import React, { useState } from 'react';
import { Button } from '@material-ui/core';

export default function Counter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  console.log(count, setCount)
  return (
    <div style={{backgroundColor: "#aaaf", width: '18rem' }}>
      <p>You clicked {count} times</p>
      <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </div>
  );
}