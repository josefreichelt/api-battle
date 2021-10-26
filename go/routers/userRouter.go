package routers

import (
	"api-battle/controllers"

	"github.com/gin-gonic/gin"
)

const baseRoute = "/user"

func SetupUserRoutes(router *gin.Engine) {
	router.GET(baseRoute, controllers.GetUser)
}
