const express = require('express');
const http = require('http');
const path = require('path');
const WebSocket = require('ws');
const pty = require('node-pty');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  const shell = process.env.SHELL || '/bin/bash';
  const term = pty.spawn(shell, [], {
    name: 'xterm-color',
    cols: 80,
    rows: 24,
    cwd: process.cwd(),
    env: process.env,
  });

  term.onData((data) => ws.send(data));

  ws.on('message', (msg) => {
    term.write(msg.toString());
  });

  ws.on('close', () => {
    term.kill();
  });
});

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://localhost:${port}`);
});
