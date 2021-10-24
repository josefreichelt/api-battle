import { Request, Response } from 'express';
import { deleteUserFromDB } from '../models/delete-user-model';

export async function deleteUserController(req:Request, res:Response){
    const { username } = req.query;
    if (!username){
        res.statusCode = 400;
        res.statusMessage = 'Username not provided';
        res.send();
        return;
    }
    try {
        const result = await deleteUserFromDB(username.toString());
        if (result){
            res.statusCode = 200;
            res.statusMessage = 'User deleted';
            res.send();
        } else {
            res.statusCode = 404;
            res.statusMessage = 'User to delete not found';
            res.send();
        }
    } catch (e){
        console.error('🛑 Error processing DELETE User request');
        console.error(e);
        res.statusCode = 500;
        res.send();
    }

}