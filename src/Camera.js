import React from "react";
import { io } from "socket.io-client";
import styled from "styled-components";
import Box from './Box'


import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';

import * as cocoSsd from '@tensorflow-models/coco-ssd';

const StyledImage = styled.img` 
  width: 900px;
    `

const Container = styled.div`
  position: relative;
`

export default function Camera(){
    const [imageSrc,setImageSrc] = React.useState(null)
    const [model,setModel] =React.useState(null)
    const [prediction,setPrediction] = React.useState(null)
    const [count,setCount] = React.useState(0)
    const imgRef = React.useRef(null)

    React.useEffect(async function(){
        const socket = io("http://192.168.178.52:3000/")
        socket.on('data', async (data, res) => {
            setImageSrc(data)
        });
    },[])

    React.useEffect(async function(){
        const socket = io("http://192.168.178.52:3000/")
        socket.once('data', async (data, res) => {
            console.log(data)
            //setImageSrc(data)
        });
    },[])

    React.useEffect(async ()=>{
        const model = await cocoSsd.load()
        setModel(model)
    },[])

    React.useEffect(async ()=>{
       if( count<100 && model  && imageSrc){
           const result = await model.detect(imgRef.current)
           setPrediction(result)
           console.log(prediction)
           setCount(count=>count+1)
       }
    },[prediction,model])




    return(
        <Container>
            <img src={imageSrc} alt=""  ref={imgRef} width={'900px'} height={'700px'}/>
            {prediction
            &&
            prediction.map((prediction,i)=>(
                <Box bbox={prediction.bbox}
                name={prediction.class}
                     key={i}
                ></Box>
            ))
            }
        </Container>

    )
}