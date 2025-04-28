import express from "express";
import app from "./src/app.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use(function (req, res, next) {
    res.status(404).sendFile(process.cwd() + '/src/img/404.jpg');
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
