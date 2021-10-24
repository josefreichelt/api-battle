import { db } from '../config/setup-database';
import { User } from '../types';

/** Gets the user from DB either by username or id */
export async function getTopUsersFromDB(){
    return new Promise<User[]|undefined>((resolve, reject)=>{
        db.all('SELECT * FROM users ORDER BY "score" DESC LIMIT 10;', (err, result)=>{
            if (err){
                reject(err);
            }
            return resolve(result);
        });
    });
}