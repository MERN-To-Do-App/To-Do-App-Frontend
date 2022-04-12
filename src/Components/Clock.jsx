import React, { useEffect, useState } from 'react'

function Clock() {

    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const interval = setInterval(() => {
          setTime(new Date().toLocaleTimeString());
        }, 1000);
      
        return () => {
          clearInterval(interval);
        };
      }, [])


  return (
    <p className="nav-element-item">{time}</p>
  )
}

export default Clock