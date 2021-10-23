import express from 'express';
import './config/setup-database';

const port = 1338;
const App = express();

App.get('/', (req, res) => {
    res.send('Hello World!');
});
App.post('/', (req, res) => {
    res.send('Hello World!');
});
App.put('/', (req, res) => {
    res.send('Hello World!');
});
App.delete('/', (req, res) => {
    res.send('Hello World!');
});


App.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});