import { Request, Response } from 'express';
import { getUserFromDB } from '../models/get-user-model';

export async function getUserController(req:Request, res:Response){
    const { username } = req.query;
    if (!username){
        res.statusCode = 400;
        res.statusMessage = 'Username not provided';
        res.send();
        return;
    }
    try {
        const result = await getUserFromDB(username.toString());
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
        res.statusCode = 500;
        res.send();
    }

}