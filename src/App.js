
import {useState} from 'react'
 
function App() {

  const [count,setCount] = useState(0)

  const handlePlusClick = () => {
    setCount(count + 1)
  }

  const handleMoinsClick = () => {
    setCount(count - 1)
  }


  return (
    <div className="App">
      <button onClick={handleMoinsClick}>-</button>
      <span>{count}</span>
      <button onClick={handlePlusClick}>+</button>
    </div>
  );
}

export default App;
