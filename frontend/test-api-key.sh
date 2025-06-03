#!/bin/bash

# Google Maps API Key Tester Script
# This script helps test your Google Maps API key configuration

echo "🗺️  Google Maps API Key Tester"
echo "================================="

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "❌ .env file not found!"
    echo "Please create a .env file with VITE_GOOGLE_MAPS_API_KEY"
    exit 1
fi

# Extract API key from .env
API_KEY=$(grep VITE_GOOGLE_MAPS_API_KEY .env | cut -d '"' -f 2)

if [ -z "$API_KEY" ]; then
    echo "❌ VITE_GOOGLE_MAPS_API_KEY not found in .env file"
    exit 1
fi

echo "✅ API Key found: ${API_KEY:0:10}..."

# Test Maps JavaScript API
echo ""
echo "🧪 Testing Maps JavaScript API..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "https://maps.googleapis.com/maps/api/js?key=$API_KEY")

if [ "$HTTP_CODE" -eq 200 ]; then
    echo "✅ Maps JavaScript API: Working"
else
    echo "❌ Maps JavaScript API: Failed (HTTP $HTTP_CODE)"
fi

# Test Geocoding API
echo ""
echo "🧪 Testing Geocoding API..."
GEOCODE_RESPONSE=$(curl -s "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=$API_KEY")
GEOCODE_STATUS=$(echo $GEOCODE_RESPONSE | grep -o '"status" : "[^"]*"' | cut -d'"' -f4)

if [ "$GEOCODE_STATUS" = "OK" ]; then
    echo "✅ Geocoding API: Working"
elif [ "$GEOCODE_STATUS" = "REQUEST_DENIED" ]; then
    echo "❌ Geocoding API: Request denied - Check API restrictions"
else
    echo "⚠️  Geocoding API: Status - $GEOCODE_STATUS"
fi

# Test Places API
echo ""
echo "🧪 Testing Places API..."
PLACES_RESPONSE=$(curl -s "https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurant&key=$API_KEY")
PLACES_STATUS=$(echo $PLACES_RESPONSE | grep -o '"status" : "[^"]*"' | cut -d'"' -f4)

if [ "$PLACES_STATUS" = "OK" ]; then
    echo "✅ Places API: Working"
elif [ "$PLACES_STATUS" = "REQUEST_DENIED" ]; then
    echo "❌ Places API: Request denied - API might not be enabled"
else
    echo "⚠️  Places API: Status - $PLACES_STATUS"
fi

echo ""
echo "📋 Summary:"
echo "- If you see 'REQUEST_DENIED' errors, check your API key restrictions"
echo "- Make sure the required APIs are enabled in Google Cloud Console"
echo "- Verify billing is enabled for your Google Cloud project"
echo "- Check HTTP referrer restrictions for your domain"

echo ""
echo "🔗 Useful links:"
echo "- Google Cloud Console: https://console.cloud.google.com/apis/credentials"
echo "- API Setup Guide: ./GOOGLE_MAPS_SETUP.md"
