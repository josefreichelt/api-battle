package controllers

import (
	"api-battle/models"
	"fmt"

	"github.com/gin-gonic/gin"
)

func GetUser(c *gin.Context) {
	username, usernameOk := c.GetQuery("username")
	if usernameOk && len(username) > 0 {
		gottenUser := models.GetUserFromDB(username)
		fmt.Printf("GOT USERNAME: %v\n", gottenUser.Username)
		c.JSON(200, gottenUser)
	}
}
