import express from 'express';
import cors from 'cors';
import './config/setup-database';
import { userRouter } from './routers/user-router';
import { getTopUserController } from './controllers/get-top-users-controller';

const port = 1338;
const App = express();

App.use(express.json());
App.use(cors());

App.use('/user', userRouter);

App.get('/users', getTopUserController);

App.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});