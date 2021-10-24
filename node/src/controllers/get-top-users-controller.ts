import { Request, Response } from 'express';
import { getTopUsersFromDB } from '../models/get-top-user-model';

export async function getTopUserController(req:Request, res:Response){
    try {
        const result = await getTopUsersFromDB();
        if (result){
            res.statusCode = 200;
            res.statusMessage = 'Users found';
            res.send(result);
        } else {
            res.statusCode = 404;
            res.statusMessage = 'Users not found';
            res.send();
        }
    } catch (e){
        console.error('🛑 Error processing GET Users request');
        console.error(e);
        res.statusCode = 500;
        res.send();
    }

}