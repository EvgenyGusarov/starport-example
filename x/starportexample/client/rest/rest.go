package rest

import (
	"github.com/gorilla/mux"

	"github.com/cosmos/cosmos-sdk/client"
	// this line is used by starport scaffolding # 1
)

const (
	MethodGet = "GET"
)

// RegisterRoutes registers starportexample-related REST handlers to a router
func RegisterRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 2
	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

}

func registerQueryRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 3
	r.HandleFunc("/starportexample/posts/{id}", getPostHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/starportexample/posts", listPostHandler(clientCtx)).Methods("GET")

}

func registerTxHandlers(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 4
	r.HandleFunc("/starportexample/posts", createPostHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/starportexample/posts/{id}", updatePostHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/starportexample/posts/{id}", deletePostHandler(clientCtx)).Methods("POST")

}
