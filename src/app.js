import express from "express";
import { horaActual, fechaActual } from "./time.js";

const app = express();

app.use(express.json());

app.get('/', function (req, res) {
	res.send('WELCOME YOU FOOL');
});

app.get('/hora', function (req, res) {
	res.send(horaActual());
});

app.get('/fecha-completa', function (req, res) {
	res.send(fechaActual());
});

app.use(function (req, res, next) {
	res.status(404).send("La ruta especificada no existe.");
})

export default app;
