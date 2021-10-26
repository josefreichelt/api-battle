package controllers

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func GetUser(c *gin.Context) {
	username, usernameOk := c.GetQuery("username")
	if usernameOk {
		fmt.Printf("GOT USERNAME: %v\n", username)
	}
}
