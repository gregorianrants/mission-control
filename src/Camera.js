import React from "react";
import { io } from "socket.io-client";
import styled from "styled-components";

export default function Camera(){
    const [imageSrc,setImageSrc] = React.useState(null)

    const StyledImage = styled.img`
    width: 500px;
    `

    React.useEffect(()=>{
        const socket = io("http://192.168.178.52:3000/")

        socket.on('data', (data, res) => {
            setImageSrc(data)
            // console.log("Receiving feed..." + data + " " + res);
            // const player = document.getElementById('play')
            //
            // player.src = data
            // $('#play').attr('src',data);
            // $('#log').text(data);
        });
    },[])

    return(
        <StyledImage src={imageSrc} alt=""/>
    )
}