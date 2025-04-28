import time from "time.js";

app.get('/', function(req, res) {
	res.send('WELCOME YOU FOOL');
});

app.get('/hora', function(req, res) {
	res.send(time.horaActual());
});

app.get('/fecha-completa', function(req, res) {
	res.send(time.fechaActual());
});

export default app;
