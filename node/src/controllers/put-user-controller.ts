import { Request, Response } from 'express';
import { putUserToDB } from '../models/put-user-model';

export async function putUserController(req:Request, res:Response){
    const { username, score } = req.body;
    if (!username || !score){
        res.statusCode = 400;
        if (!username){
            res.statusMessage = 'Username not provided';
        } else if (username && !score){
            res.statusMessage = 'Score not provided';
        } else {
            res.statusMessage = 'Username and Score not provided';
        }
        res.send();
        return;
    }
    try {
        const result = await putUserToDB(username.toString(), parseInt(score.toString(), 10));
        if (result){
            res.statusCode = 200;
            res.statusMessage = 'User updated';
            res.send(result);
        } else {
            res.statusCode = 404;
            res.statusMessage = 'User not updated';
            res.send();
        }
    } catch (e){
        console.error('🛑 Error processing PUT User request');
        console.error(e);
        res.statusCode = 500;
        res.send();
    }

}