package routers

import (
	"api-battle/controllers"

	"github.com/gin-gonic/gin"
)

const baseRoute = "/user"

func SetupUserRoutes(router *gin.Engine) {
	router.GET(baseRoute, controllers.GetUser)
	router.POST(baseRoute,controllers.PostUser)
	router.PUT(baseRoute,controllers.PutUser)
	router.DELETE(baseRoute,controllers.DeleteUser)
}
