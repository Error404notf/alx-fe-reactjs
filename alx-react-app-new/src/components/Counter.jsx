import {useState} from 'react'
function Counter(){
  const [count, setCount] = useState(0)

  return (
    <div style={{
      textAlign: 'center',
      padding: '30px',
      backgroundColor: 'white',
      borderRadius: '10px',
      maxWidth: '400px',
      margin: '20px auto',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  }}>
      <p  style={{ 
                fontSize: '48px', 
                color: '#3498db',
                margin: '20px 0' 
            }}>Current {count}</p>
      <button onClick = {() => setCount(count + 1)}> Increment</button>
      <button onClick ={()=> setCount(count - 1)}>Decrement</button>
      <button onClick = {()=> setCount(0)}>Reset</button>
    </div>
  )
}
export default Counter;