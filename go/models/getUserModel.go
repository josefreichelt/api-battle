package models

import (
	"api-battle/utils"
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

func GetUserFromDB(username string) (user utils.User, err error) {
	db, err := sql.Open("sqlite3", "../database.db")
	utils.CheckErr(err)

	stmt, err := db.Prepare("SELECT * FROM users WHERE id=? OR username=?;")
	utils.CheckErr(err)

	res, err := stmt.Query(username, username)
	utils.CheckErr(err)
	res.Next()

	var id uint
	var name string
	var score int

	err = res.Scan(&id, &name, &score)
	utils.CheckErr(err)
	gottenUser := utils.User{Id: id, Username: name, Score: score}

	res.Close()
	db.Close()
	return gottenUser, err
}
