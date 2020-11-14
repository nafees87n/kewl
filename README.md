# kewl

Kewl is a multi-topic discussion forum wherein you can indulge in real-time discussions on certain topics with like minded people to generate meaningful thoughts on the topic.

Working prototype:
<br/>
https://tranquil-chamber-48344.herokuapp.com/

---

## For Developers
Frontend: This project includes a frontend UI bootstrapped with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) and [material UI](https://material-ui.com/getting-started/installation/). The frontend client is located in `./client` folder.


Backend:BE: The backend runs on express/nodejs. In production mode, express server exposes the API endpoints and serve the static frontend from `./client/build`.

---

## Installation
1. Fork the repo.
2. Run `npm install` in root dir.
3. Run `npm run dev` to spin up your client/server. This will run your react app in dev mode and server in watch mode by nodemon.

NOTE: by default `create-react-app` runs webpack-dev-server on port `3000`. The server is configured to run on `5000` port. So make sure that these ports are not blocked on your system.

**Important:** Check `.env.sample` to configure your `.env` file.