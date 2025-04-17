# Transportation API Documentation

## Overview

The Transportation API collection in the MyGov Response Hub provides access to transportation and mapping data for Nepal. This collection integrates with the Baato Maps API and includes functionality for location search, route planning, and navigation.

## API Endpoints

### Search Locations

Searches for locations based on a query string.

**Endpoint:** `GET /api/v1/search`

**Parameters:**
- `key` (required): Your Baato API key
- `q` (required): Search query (e.g., "Kathmandu", "Thamel", "Durbar Square")
- `limit` (optional): Maximum number of results to return (default: 10)

**Example Request:**
```
GET https://api.baato.io/api/v1/search?key=your_api_key&q=Kathmandu&limit=5
```

**Example Response:**
```json
{
  "data": [
    {
      "placeId": 12345,
      "name": "Kathmandu",
      "address": "Kathmandu, Nepal",
      "type": "city",
      "score": 0.99,
      "coordinates": {
        "lat": 27.7172,
        "lon": 85.3240
      }
    },
    {
      "placeId": 12346,
      "name": "Kathmandu Durbar Square",
      "address": "Basantapur, Kathmandu, Nepal",
      "type": "landmark",
      "score": 0.85,
      "coordinates": {
        "lat": 27.7048,
        "lon": 85.3068
      }
    }
    // Additional results...
  ]
}
```

**Response Fields:**
- `data`: Array of location results
  - `placeId`: Unique identifier for the location
  - `name`: Name of the location
  - `address`: Full address of the location
  - `type`: Type of location (city, landmark, etc.)
  - `score`: Relevance score for the search query
  - `coordinates`: Latitude and longitude coordinates

### Get Directions

Retrieves directions between two or more points.

**Endpoint:** `GET /api/v1/directions`

**Parameters:**
- `key` (required): Your Baato API key
- `points` (required): Pipe-separated list of lat,lon coordinates (e.g., "27.7172,85.3240|27.6939,85.2799")
- `mode` (optional): Transportation mode (car, bike, foot) (default: car)
- `alternatives` (optional): Whether to return alternative routes (true/false) (default: false)

**Example Request:**
```
GET https://api.baato.io/api/v1/directions?key=your_api_key&points=27.7172,85.3240|27.6939,85.2799&mode=car
```

**Example Response:**
```json
{
  "data": {
    "routes": [
      {
        "distance": 5432,
        "duration": 1245,
        "geometry": "encoded_polyline_data",
        "legs": [
          {
            "distance": 5432,
            "duration": 1245,
            "steps": [
              {
                "distance": 250,
                "duration": 60,
                "geometry": "encoded_polyline_data",
                "name": "Kantipath",
                "mode": "driving",
                "maneuver": {
                  "location": [85.3240, 27.7172],
                  "bearing_before": 0,
                  "bearing_after": 180,
                  "instruction": "Head south on Kantipath"
                }
              },
              // Additional steps...
            ]
          }
        ]
      }
    ]
  }
}
```

**Response Fields:**
- `data`: Container for route data
  - `routes`: Array of possible routes
    - `distance`: Total distance in meters
    - `duration`: Total duration in seconds
    - `geometry`: Encoded polyline representing the route
    - `legs`: Array of route segments
      - `steps`: Turn-by-turn navigation instructions

### Get Reverse Geocoding

Retrieves location information for a given coordinate.

**Endpoint:** `GET /api/v1/reverse`

**Parameters:**
- `key` (required): Your Baato API key
- `lat` (required): Latitude coordinate
- `lon` (required): Longitude coordinate

**Example Request:**
```
GET https://api.baato.io/api/v1/reverse?key=your_api_key&lat=27.7172&lon=85.3240
```

**Example Response:**
```json
{
  "data": {
    "placeId": 12345,
    "name": "Kantipath",
    "address": "Kantipath, Kathmandu, Nepal",
    "type": "road",
    "coordinates": {
      "lat": 27.7172,
      "lon": 85.3240
    },
    "nearby": [
      {
        "placeId": 12346,
        "name": "Kathmandu Durbar Square",
        "distance": 450,
        "type": "landmark"
      }
      // Additional nearby places...
    ]
  }
}
```

## Error Handling

The API returns the following error responses:

- **400 Bad Request**: Invalid parameters
- **401 Unauthorized**: Invalid API key
- **404 Not Found**: Location not found
- **429 Too Many Requests**: Rate limit exceeded
- **500 Internal Server Error**: Server-side error

**Example Error Response:**
```json
{
  "error": {
    "code": 401,
    "message": "Invalid API key"
  }
}
```

## Testing

The Transportation API collection includes comprehensive tests to validate:
- Response status codes
- Response format and content type
- Data structure and required fields
- Coordinate validation
- Route calculation accuracy

## Monitoring

The Transportation API Monitor checks the health and performance of the transportation data sources at regular intervals. It verifies:
- API availability
- Response time
- Data structure integrity
- Content validation

## Mock Data

Mock data is available for testing and as a fallback when the primary API is unavailable. The mock server provides consistent responses for development and testing purposes.

## Usage in Flows

The Transportation API is used in the following Postman Flows:
- **Emergency Response Flow**: Provides evacuation routes and transportation information during emergencies

## Rate Limits

The Baato Maps API has the following rate limits:
- Free tier: 1000 requests per day
- Pro tier: 10,000 requests per day

## Authentication

The Baato Maps API requires an API key for authentication. You can obtain a key by registering at [https://baato.io/](https://baato.io/).

## Additional Resources

- [Baato Maps API Documentation](https://docs.baato.io/)
- [Baato Maps API Dashboard](https://baato.io/dashboard)
