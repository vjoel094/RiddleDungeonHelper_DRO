const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

// Configura el middleware para servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Define una ruta para servir la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define la ruta para manejar la lógica de las preguntas
app.get('/questions', (req, res) => {
    // Aquí puedes agregar la lógica para manejar las preguntas y las respuestas
    // por ejemplo, puedes usar req.query para obtener los datos enviados desde el formulario
    // y luego devolver la respuesta adecuada
    // res.send(/* respuesta */);
});

// Define una ruta de error 404
app.use((req, res, next) => {
    res.status(404).send('Page not found');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Running server on port ${PORT}`);
});
