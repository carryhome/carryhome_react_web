import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function Example() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked ${count} times`;
  // });

  useEffect(() => {
    // Update the document title using the browser API
    alert(`I am clicked ${num} times!`)
  }, [num]);

  return (
    <div>
      {/* <p>Check browser title</p>
      <p>You clicked {count} times</p> */}
      {/* <button onClick={() => setCount(count + 1)}>
        Click me
      </button> */}
      <Button onClick={() => setNum(num + 1)}>
        useEffect
      </Button>
       you clicked {num} times
      <br/><br/>
      <Button onClick={() => setNums(nums + 1)}>
        Click me
      </Button>
       you clicked {nums} times
    </div>
  );
}

export default Example