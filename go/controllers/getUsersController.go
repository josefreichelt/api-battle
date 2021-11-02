package controllers

import (
	"api-battle/models"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetUsers(c *gin.Context) {
	gottenUsers, err := models.GetUsersFromDB()
	if err != nil {
		c.Status(http.StatusInternalServerError)
	} else {
		fmt.Printf("Got %v users\n", len(gottenUsers))
		c.JSON(200, gottenUsers)
	}
}
