package main

import (
	"api-battle/controllers"
	"api-battle/routers"
	"fmt"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.New()
	router.Use(cors.New(cors.Config{
		AllowOrigins:  []string{"*"},
		AllowMethods:  []string{"PUT", "GET", "POST", "DELETE"},
		AllowHeaders:  []string{"Origin", "content-type"},
		ExposeHeaders: []string{"content-type"},
	}))
	routers.SetupUserRoutes(router)
	router.GET("/users", controllers.GetUsers)
	fmt.Println("Hello there!")
	router.Run("localhost:1338")
}
