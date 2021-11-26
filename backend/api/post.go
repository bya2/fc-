package api

import (
	"fmt"
	"log"

	ctrl_user "github.com/FX-KNUT/fc-/backend/controller/user"
	"github.com/FX-KNUT/fc-/backend/service"
<<<<<<< HEAD

	"github.com/gin-gonic/gin"
)

// core
func Post(c chan<- bool, r *gin.Engine) {
	go r.POST("/signup", fn_REST_post__signup)
	go r.POST("/change_profile_picture", fn_REST_post__profile_picture)

	board := r.Group("/board")
	{	
	}

	post := r.Group(("/post"))
	{
		post.POST("/create")
		post.POST("/get")
		post.POST("/update")
		post.POST("/delete")
	}

	c <- true
}
=======
	"github.com/gin-gonic/gin"
)

/* ************************************* */
// service and controller

// user
var (
	POST_user_service service.User_service = service.New__User()
	POST_user_controller ctrl_user.User_controller = ctrl_user.New__User(POST_user_service)
)

// block
var (
	POST_block_service service.Block_service
)

/* ************************************* */
>>>>>>> 284099974d25184989677ca1ea348d39d2e588bc

func fn_REST_post__signup(c *gin.Context) {
	err := POST_user_controller.SignUp(c)
	
	if err != nil {
		fmt.Println(err.Error())
	}
}

// func fn_REST_post__profile_picture(c *gin.Context) {
// 	err := ctrl_user.Fn_change_profile_picture(c)
// 	if err != nil {
// 		fmt.Println(err.Error())
// 	}
// }

<<<<<<< HEAD
func fn_REST_post__create_post(c *gin.Context) {
	err := service.CreatePost(c)
	if err != nil {
		log.Panic(err)
	}
}
=======
// core
func Post(c chan<- bool, r *gin.Engine) {
	go r.POST("/signup", fn_REST_post__signup)
	// go r.POST("/change_profile_picture", fn_REST_post__profile_picture)
	c <- true
}
>>>>>>> 284099974d25184989677ca1ea348d39d2e588bc
