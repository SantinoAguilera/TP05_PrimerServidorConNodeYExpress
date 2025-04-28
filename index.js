import express from "express";
import app from "./src/app.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use(function (req, res, next) {
    res.status(404).send("La ruta especificada no existe.");
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
