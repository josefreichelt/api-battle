package controllers

import (
	"api-battle/models"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func DeleteUser(c *gin.Context) {
	username, usernameOk := c.GetQuery("username")
	if usernameOk && len(username) > 0 {
		err := models.DeleteUserFromDB(username)
		if err != nil {
			fmt.Println("🛑 Delete user error")
			fmt.Println(err)
			c.Status(http.StatusNotFound)
		} else {
			fmt.Printf("Deleted user %v\n", username)
			c.Status(http.StatusOK)
		}
	} else {
		fmt.Println("🛑 Bad request in delete user, missing username")
		c.Status(http.StatusBadRequest)
	}
}
