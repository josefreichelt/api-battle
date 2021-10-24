import { Request, Response } from 'express';
import { postUserToDB } from '../models/post-user-model';

export async function postUserController(req:Request, res:Response){
    const { username, score } = req.body;
    console.log('POSTY');
    console.log(req.body);
    console.log(username);
    console.log(score);
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
            res.statusMessage = 'User found';
            res.send(result);
        } else {
            res.statusCode = 404;
            res.statusMessage = 'User not found';
            res.send();
        }
    } catch (e){
        console.error('🛑 Error processing GET User request');
        console.error(e);
    }

}