package db

import (
	"context"
	"log"

	"github.com/DTO-Partners/Admin/shared/config"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var client *mongo.Client

func InitMongo(ctx context.Context) {
	uri := config.Get("MONGO_URI", "mongodb://localhost:27017")

	clientOptions := options.Client().ApplyURI(uri)
	c, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatalf("Mongo connection error: %v", err)
	}

	if err := c.Ping(ctx, nil); err != nil {
		log.Fatalf("Mongo ping error: %v", err)
	}

	log.Println("✅ MongoDB connected")
	client = c
}

func GetCollection(dbName, collection string) *mongo.Collection {
	return client.Database(dbName).Collection(collection)
}
