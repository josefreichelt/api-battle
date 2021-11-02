package controllers

import (
	"api-battle/models"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetUser(c *gin.Context) {
	username, usernameOk := c.GetQuery("username")
	if usernameOk && len(username) > 0 {
		gottenUser, err := models.GetUserFromDB(username)
		if err != nil {
			c.Status(http.StatusNotFound)
		}else {
			fmt.Printf("Got user: id: %v | name: %v | score: %v\n", gottenUser.Id, gottenUser.Username, gottenUser.Score)
			c.JSON(200, gottenUser)
		}
	} else {
		fmt.Println("🛑 Bad request in get user, missing username")
		c.Status(http.StatusBadRequest)
	}
}
