import React, { useState } from 'react'

const BgChanger = () => {
  const [color , setColor] = useState('black')

  return (
      <div style={{backgroundColor:color,height:"90vh",width:"90vw",padding:'10px'}}>
        <div style={{backgroundColor:'white',borderRadius:'5px',display:'flex',flexWrap:'wrap',gap:'10px',justifyContent:'space-between',padding:'10px'}}>

          <button onClick={() => setColor('red')} style={{cursor:'pointer',backgroundColor:'red',border:'none',padding:'10px',borderRadius:'5px'}}>Red</button>
          <button onClick={() => setColor('orange')} style={{cursor:'pointer',backgroundColor:'orange',border:'none',padding:'10px',borderRadius:'5px'}}>Orange</button>
          <button onClick={() => setColor('pink')} style={{cursor:'pointer',backgroundColor:'pink',border:'none',padding:'10px',borderRadius:'5px'}}>Pink</button>
          <button onClick={() => setColor('blue')} style={{cursor:'pointer',backgroundColor:'royalblue',border:'none',padding:'10px',borderRadius:'5px'}}>Blue</button>
          <button onClick={() => setColor('yellow')} style={{cursor:'pointer',backgroundColor:'yellow',border:'none',padding:'10px',borderRadius:'5px'}}>Yellow</button>

        </div>
      </div>
  )
}

export default BgChanger
