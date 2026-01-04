# Web Terminal

A minimal web-based terminal experience backed by a lightweight Node.js server and an Ubuntu-based Docker image.

## Features
- Launches a shell session inside the browser powered by `node-pty` and `xterm.js`.
- Zero-configuration: start the server and open your browser.
- Container image built from Ubuntu for compatibility with common CLI tools.

## Quick Start
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Open http://localhost:3000 in your browser to use the terminal.

## Docker
Build and run the Ubuntu-based container:
```bash
docker build -t web-terminal .
docker run --rm -p 3000:3000 web-terminal
```

## Deploy to Zeabur
Click the button below to deploy this repository to Zeabur in one step:

[![Deploy on Zeabur](https://zeabur.com/button.svg)](https://zeabur.com/deploy?template=https://github.com/zhengui666/web-terminal)


## Environment Variables
- `PORT` (optional): Port for the HTTP and WebSocket server. Defaults to `3000`.

## License
MIT
