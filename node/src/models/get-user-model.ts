import { db } from '../config/setup-database';
import { User } from '../types';

/** Gets the user from DB either by username or id */
export async function getUserFromDB(username:string){
    return new Promise<User|undefined>((resolve, reject)=>{
        db.get(`SELECT * FROM users WHERE id="${username}" OR username="${username}";`, (err, result)=>{
            if (err){
                reject(err);
            }
            return resolve(result);
        });
    });
}