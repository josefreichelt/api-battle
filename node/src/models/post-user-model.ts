import { db } from '../config/setup-database';

/** Creates new user and inserts it to the DB*/
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