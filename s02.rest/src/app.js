import express, { request, response } from 'express';

const app=express();

app.get('/',(req, res)=>{

    res.status(200).end();

});

app.get('/premiere',(req, res)=>{

    res.status(200);
    res.set('Content-Type', 'text/plain',)
    res.send('notre premiere route avec express');

});

export default app;