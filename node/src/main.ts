import express from 'express';
import cors from 'cors';
import './config/setup-database';
import { userRouter } from './routers/user-router';

const port = 1338;
const App = express();

App.use(express.json());
App.use(cors());

App.use('/user', userRouter);

App.delete('/', (req, res) => {
    console.log('DELETE');
    console.log(req.query);
    console.log(req.body);
    res.send({ msg: 'Bye bob!' });
});
App.get('/s', (req, res) => {
    console.log('GET');
    console.log(req.query);
    console.log(req.body);
    res.send({
        id: 1, username: 'get bob', score: 3
    });
});

App.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});