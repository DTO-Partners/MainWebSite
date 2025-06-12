package main

import (
	"context"
	"log"
	"net/http"

	"github.com/DTO-Partners/Admin/shared/config"
	"github.com/DTO-Partners/Admin/shared/db"
)

func main() {
	config.LoadEnv("development")

	ctx := context.Background()
	db.InitMongo(ctx)

	http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Ok"))
	})

	log.Printf("Server is running at :8031")
	log.Fatal(http.ListenAndServe(":8031", nil))
}
