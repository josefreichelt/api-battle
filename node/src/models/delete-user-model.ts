import { db } from '../config/setup-database';

/** Deletes the user from DB either by username*/
export async function deleteUserFromDB(username:string){
    return new Promise((resolve, reject)=>{
        db.run(`DELETE FROM users WHERE username="${username}";`, (err)=>{
            if (err){
                reject(err);
            }
            return resolve(true);
        });
    });
}