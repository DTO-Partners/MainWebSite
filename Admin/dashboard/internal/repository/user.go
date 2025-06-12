package repository

import (
	"context"
	"time"

	"github.com/DTO-Partners/Admin/shared/db"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

var col *mongo.Collection = db.GetCollection("dashboard", "users")

func FindAllUsers() ([]bson.M, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	cursor, err := col.Find(ctx, bson.M{})
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)

	var users []bson.M
	if err := cursor.All(ctx, &users); err != nil {
		return nil, err
	}
	return users, nil
}
