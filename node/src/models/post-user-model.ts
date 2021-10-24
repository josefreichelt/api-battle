import { db } from '../config/setup-database';

/** Gets the user from DB either by username or id */
export async function postUserToDB(username:string, score:number){
    return new Promise((resolve, reject)=>{
        db.run(`INSERT INTO users ("username", "score") VALUES("${username}", ${score});`, (err)=>{
            if (err){
                reject(err);
            }
            return resolve(true);
        });
    });
}