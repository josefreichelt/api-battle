package models

import (
	"api-battle/utils"
	"database/sql"
	"fmt"

	_ "github.com/mattn/go-sqlite3"
)

func GetUserFromDB(username string) (user utils.User, err error) {
	db, err := sql.Open("sqlite3", "../database.db")
	var newUser = new(utils.User)

	if err != nil {
		fmt.Println("🛑 Error openning database")
		return *newUser, err
	}
	stmt, err := db.Prepare("SELECT * FROM users WHERE id=? OR username=?;")
	if err != nil {
		fmt.Println("🛑 Error preparing query")
		return *newUser, err
	}

	res, err := stmt.Query(username, username)
	if err != nil {
		fmt.Println("🛑 Error executing query")
		return *newUser, err
	}
	res.Next()

	err = res.Scan(&newUser.Id, &newUser.Username, &newUser.Score)
	if err != nil {
		fmt.Println("🛑 Error scanning rows")
		return *newUser, err
	}
	res.Close()
	db.Close()
	return *newUser, err
}
