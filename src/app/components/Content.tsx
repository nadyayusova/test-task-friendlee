'use client';

import {useRef, useEffect} from 'react';
import io from 'socket.io-client';

const TIME = 5000;

export default function Content({userKey}: {userKey: string}) {
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);

  const socket = io('http://localhost:5000');

  useEffect(() => {
    socket.connect();

    socket.on('connect', () => {
      console.log('Socket ID: ' + socket.id);
    });

    socket.on('responseEvent', (data) => {
      console.log('Server response: ' + data + ', time: ' + Date.now());
    });

    interval.current = setInterval(() => {
      socket.emit('sendEvent', userKey);
    }, TIME);

    return () => {
      if (interval.current) clearInterval(interval.current);
      socket.disconnect();
    };
  }, [socket, userKey]);

  return (
    <main>
      <p>Index page</p>
    </main>
  );
}
