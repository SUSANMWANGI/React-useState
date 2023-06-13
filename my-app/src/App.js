
import './App.css';
import React from 'react'

import Header from './components/Header';
import Box from './components/Box';
import boxes from './components/data'


function App() {
  
  const [squares, setSquares] =React.useState(boxes)

  
  const squareElements =squares.map(square=>(
    <Box  key={square.id} on={square.on}/>
  ))
  
  
  return (
    <div className="App">
       <Header/>
       {squareElements}
      <Box/> 
       
       
       
       
       
        
    </div>
  )
}

export default App;
