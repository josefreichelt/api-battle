package main

import (
	"api-battle/routers"

	"fmt"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.Use(cors.New(cors.Config{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{"PUT", "GET", "POST", "DELETE"},
		AllowHeaders: []string{"Origin"},
	}))
	routers.SetupUserRoutes(router)
	fmt.Println("Hello there!")
	router.Run("localhost:1338")
}
