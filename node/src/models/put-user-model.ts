import { db } from '../config/setup-database';

/** Updates the user score in DB*/
export async function putUserToDB(username:string, score:number){
    return new Promise((resolve, reject)=>{
        db.run(`UPDATE users SET "score"=${score} WHERE username="${username}";`, (err)=>{
            if (err){
                reject(err);
            }
            return resolve(true);
        });
    });
}