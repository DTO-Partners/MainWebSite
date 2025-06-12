package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

func LoadEnv(envType string) {
	envFile := ".env." + envType

	if err := godotenv.Load(envFile); err != nil {
		log.Printf("Could not find load %s: %v", envFile, err)
	} else {
		log.Printf("Loaded Environment from %s", envFile)
	}
}

func Get(key, fallback string) string {
	if value, ok := os.LookupEnv(key); ok {
		return value
	}

	return fallback
}
