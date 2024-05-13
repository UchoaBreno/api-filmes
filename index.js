const express = require('express');
const server = express();
const filmes = require('./src/data/filmes.json')

server.get('/user', (req,res) => {
    return res.json({usuario: 'Breno Uchoa'})
})

server.get('/filmes', (req,res) => {
    return res.json({filmes})
})

server.listen (3000, () =>{
    console.log('O servidor está funcionando...')
});