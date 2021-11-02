package models

import (
	"api-battle/utils"
	"database/sql"
	"fmt"

	_ "github.com/mattn/go-sqlite3"
)

func GetUsersFromDB() ([]*utils.User, error) {
	var users []*utils.User
	db, err := sql.Open("sqlite3", "../database.db")
	if err != nil {
		fmt.Println("🛑 Error openning database")
		return users, err
	}

	rows, err := db.Query("SELECT * FROM users ORDER BY \"score\" DESC LIMIT 10;")
	if err != nil {
		fmt.Println("🛑 Error executing query")
		return users, err
	}

	for rows.Next() {
		user := new(utils.User)
		err := rows.Scan(&user.Id, &user.Username, &user.Score)
		if err != nil {
			fmt.Println("🛑 Error scanning rows")
		} else {
			users = append(users, user)
		}
	}

	rows.Close()
	db.Close()
	return users, err
}
