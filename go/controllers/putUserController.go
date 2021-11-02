package controllers

import (
	"api-battle/models"
	"api-battle/utils"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func PutUser(c *gin.Context) {
	var newUser = new(utils.User)
	err := c.BindJSON(&newUser)

	if err != nil {
		fmt.Println("🛑 Bad request in put")
		fmt.Println(err)
		c.Status(http.StatusBadRequest)
	} else {
		usr, err := models.PutUserToDB(*newUser)
		if err != nil {
			fmt.Println("🛑 Error updating user in db")
			c.Status(http.StatusInternalServerError)
		} else {
			fmt.Printf("Updated user: id: %v | name: %v | score: %v\n", usr.Id, usr.Username, usr.Score)
			c.JSON(200, usr)
		}
	}
}
