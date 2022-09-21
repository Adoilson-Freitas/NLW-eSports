import express from "express";

const app = express();


app.get('/ads', (request, response) => {
  return response.json([
    {id: 1, name: 'Anuúncio 1'},
    {id: 2, name: 'Anuúncio 2'},
    {id: 3, name: 'Anuúncio 3'},
    {id: 4, name: 'Anuúncio 4'},
])
})

app.listen(3333)