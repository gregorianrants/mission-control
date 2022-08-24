import React from "react";
import { io } from "socket.io-client";
import {SteeringWheel} from "./SteeringWheel"

export default function ControlPanel(){
    const [socket,setSocket] = React.useState()

    React.useEffect(()=>{
        const newSocket = io("http://192.168.178.52:3000/")
        setSocket(newSocket)
        return () => newSocket.close();
    },[setSocket])

    const handleForward = ()=>{
        socket.emit('forward',null)
    }

    const handleStop = ()=>{
        socket.emit('stop',null)
    }


    return (
        <div>
            <button onClick={handleForward}>Forward</button>
            <button onClick={handleStop}>Stop</button>
            <SteeringWheel/>
        </div>
    )
}