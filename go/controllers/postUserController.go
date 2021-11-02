package controllers

import (
	"api-battle/models"
	"api-battle/utils"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func PostUser(c *gin.Context) {
	var newUser = new(utils.User)
	err := c.BindJSON(&newUser)

	if err != nil {
		fmt.Println("🛑 Bad request in post")
		fmt.Println(err)
		c.Status(http.StatusBadRequest)
	} else {
		usr, err := models.PostUserToDB(*newUser)
		if err != nil {
			fmt.Println("🛑 Error inserting user to db")
			c.Status(http.StatusInternalServerError)
		} else {
			fmt.Printf("Posted user: id: %v | name: %v | score: %v\n", usr.Id, usr.Username, usr.Score)
			c.JSON(200, usr)
		}
	}
}
