import React, { useEffect, useState } from 'react'
import Wave from 'react-wavify'
import { isMobileOnly } from 'react-device-detect';

const WaveCommon = ({text='Your text', height='250px', color='rgba(79, 70, 229, 0.9450980392)', fontSize = '40px'}) => {

  const [isMobile, setIsMobile] = useState(false)
  useEffect(()=>{
    setIsMobile(isMobileOnly)
  },[isMobileOnly])

  return (
    <div style={{ position: 'relative', width: '100%', height }}>
    <Wave fill={color}
          paused={false}
          style={{ display: 'flex', height: '100%', transform: 'scaleY(-1)' }}
          options={{
              height: 20,
              amplitude: 30,
              speed: 0.20,
              points: isMobile ? 2 : 3
          }}
    />
    <div style={{
        position: 'absolute',
        top: '50%', // centers vertically
        left: '50%', // centers horizontally
        transform: 'translate(-50%, -50%)',
        color: 'white', // text color
        fontSize: isMobile ? '30px' : fontSize, // text size
        fontWeight: 'bold' // text weight
    }}>
        {text}
    </div>
</div>

  )
}

export default WaveCommon