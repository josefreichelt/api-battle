package controllers

import (
	"fmt"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
)



var upGrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

func WebsocketsUpgrader(c *gin.Context) {
	ws, err := upGrader.Upgrade(c.Writer, c.Request, nil)

	if err != nil {
		fmt.Println("WS Upgrade failed")
		fmt.Println(err)
	}
	defer ws.Close()

	var welcomeMsg = WSMessage{Username: "server", Message: "Welcome to api-battle chat", Date: time.Now().Format("15:04")}
	ws.WriteJSON(welcomeMsg)
}

type WSMessage struct {
	Username string `json:"username"`
	Message  string `json:"message"`
	Date     string `json:"date"`
}
