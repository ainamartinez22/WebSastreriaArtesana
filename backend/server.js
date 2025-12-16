const express = require('express');
const cors = require('cors');
const posts = require('./data/posts.json');
const products = require('./data/products.json');
require('dotenv').config()
const axios = require('axios')

const app = express();
app.use(cors());
app.use(express.json());


app.get('/api/posts', (req, res) => {
    res.json(posts);
});


app.get('/api/products', (req, res) => {
    res.json(products);
});


app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Nuevo contacto:', name, email, message);
    res.json({ success: true });
});

app.get('/api/instagram', async (req, res) => {
    try {
        const url = `https://graph.instagram.com/${process.env.INSTAGRAM_USER_ID}/media`
        const response = await axios.get(url, {
            params: {
                fields: 'id,caption,media_url,permalink,timestamp',
                access_token: process.env.INSTAGRAM_TOKEN,
                limit: 6
            }
        })

        res.json(response.data.data)
    } catch (error) {
        console.error(error.response?.data || error.message)
        res.status(500).json({ error: 'Error obteniendo Instagram' })
    }
})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`);
});