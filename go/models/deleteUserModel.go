package models

import (
	"database/sql"
	"errors"
	"fmt"

	_ "github.com/mattn/go-sqlite3"
)

func DeleteUserFromDB(username string) (err error) {
	db, err := sql.Open("sqlite3", "../database.db")

	if err != nil {
		fmt.Println("🛑 Error openning database")
		fmt.Println(err)
		return err
	}

	stmt, err := db.Prepare("DELETE FROM users WHERE username=?")
	if err != nil {
		fmt.Println("🛑 Error preparing query")
		fmt.Println(err)
		return err
	}

	res, err := stmt.Exec(username)
	if err != nil {
		fmt.Println("🛑 Error executing query")
		fmt.Println(err)

		return err
	}
	affected, err := res.RowsAffected()
	db.Close()
	if affected == 0 {
		return errors.New("User already deleted")
	}
	return err
}
