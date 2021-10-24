import { Request, Response } from 'express';
import { postUserToDB } from '../models/post-user-model';

export async function postUserController(req:Request, res:Response){
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
        const result = await postUserToDB(username.toString(), parseInt(score.toString(), 10));
        if (result){
            res.statusCode = 200;
            res.statusMessage = 'User created';
            res.send();
        } else {
            res.statusCode = 404;
            res.statusMessage = 'User not created';
            res.send();
        }
    } catch (e){
        console.error('🛑 Error processing POST User request');
        console.error(e);
        res.statusCode = 500;
        res.send();
    }

}