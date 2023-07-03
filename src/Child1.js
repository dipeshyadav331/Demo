import React, { useState } from 'react'

function Child1() {
  const[inputText , setInputText] = useState('');


  function updateInputText(event){
    const curInputValue = event.target.value;
    setInputText(curInputValue);
  }

  return (
    <div>
      <p>Hi this in input , but the question is what would change {inputText}</p>
      <input type="text" onChange={updateInputText} />
      {/* <p onClick={ () => setFruit('hh.value')}>The input here is {fruit}</p> */}
    </div>
  )
}

export default Child1