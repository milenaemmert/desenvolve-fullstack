const express = require('express');
const app = express();

const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');

app.use(express.static('public'));

app.get('/trilhas', async (_, res) => {
    await client.connect();
    const trilhas = await client.db('trilhasDb')
            .collection('trilhas').find().toArray();
    res.json(trilhas);
});


app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
