import { Database } from 'sqlite3';
import { resolve } from 'path';

export const db = new Database(resolve(__dirname, '../../../database.db'));


db.all('SELECT * from users;', (err, rows)=>{
    console.log(err);
    console.log(rows);
});