package models

import (
	"api-battle/utils"
	"database/sql"
	"fmt"

	_ "github.com/mattn/go-sqlite3"
)

func PutUserToDB(user utils.User) (utils.User, error) {
	db, err := sql.Open("sqlite3", "../database.db")

	if err != nil {
		fmt.Println("🛑 Error openning database")
		fmt.Println(err)
		return user, err
	}
	stmt, err := db.Prepare("UPDATE users SET score=? WHERE username=?;")
	if err != nil {
		fmt.Println("🛑 Error preparing query")
		fmt.Println(err)
		return user, err
	}

	res, err := stmt.Exec(user.Score, user.Username)
	if err != nil {
		fmt.Println("🛑 Error executing query")
		fmt.Println(err)
		return user, err
	}
	lastId, err := res.LastInsertId()
	user.Id = uint(lastId)
	if err != nil {
		fmt.Println("🛑 Error with last id")
		fmt.Println(err)
		return user, err
	}
	db.Close()
	return user, err
}
