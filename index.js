const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000; 

// EP otra API
app.get('/api/external', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Hubo un error al obtener los datos.' });
    }
});

// EP Suma
app.get('/api/calculo', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Se requieren ambos parámetros num1 y num2.' });
    }
    const resultado = parseInt(num1) + parseInt(num2);
    res.json({ resultado });
});

app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
