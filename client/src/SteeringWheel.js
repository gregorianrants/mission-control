import styled from "styled-components";
import React from "react";
import round from './utilities/round.mjs'

const width = 500

const Box = styled.div`
  border: 1px solid black;
  width: ${width}px;
  height: 100px;
`


export function SteeringWheel(){
    const [speed,setSpeed] = React.useState(0)

    React.useEffect(()=>{
        console.log(speed)
    },[speed])

    function handleMouseMove(e){
        const rounded = round((e.clientX)/width)
        setSpeed(Math.min(1,rounded))
    }

    function handleMouseLeave(e){
        setSpeed(0)
        console.log(speed)
    }

    return <Box
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
    />
}