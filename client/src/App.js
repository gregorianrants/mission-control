import Camera from "./Camera";
import ControlPanel from "./ControlPanel";
import io from 'socket.io-client';
import React, { useState, useEffect } from 'react';

const socket = io();

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('pong', () => {
      setLastPong(new Date().toISOString());
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
    };
  }, []);

  const sendPing = () => {
    socket.emit('ping');
  }

  return (
      <div>
        <p>Connected: { '' + isConnected }</p>
        <p>Last pong: { lastPong || '-' }</p>
        <button onClick={ sendPing }>Send ping</button>
      </div>
  );
}

export default App;
