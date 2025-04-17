# Weather API Documentation

## Overview

The Weather API collection in the MyGov Response Hub provides access to weather data for locations across Nepal. This collection integrates with the Nepal Weather API and includes fallback mock data to ensure reliability.

## API Endpoints

### Get Weather by Location

Retrieves current weather information for a specified location in Nepal.

**Endpoint:** `GET /api/?place={location}`

**Parameters:**
- `place` (required): The name of the location (e.g., Kathmandu, Pokhara, Bhaktapur)

**Example Request:**
```
GET https://nepal-weather-api.herokuapp.com/api/?place=Kathmandu
```

**Example Response:**
```json
{
  "status": "true",
  "place": "Kathmandu",
  "max": "28",
  "min": "16",
  "rain": "0.0mm"
}
```

**Response Fields:**
- `status`: Indicates if the request was successful
- `place`: The location for which weather data is provided
- `max`: Maximum temperature in Celsius
- `min`: Minimum temperature in Celsius
- `rain`: Rainfall amount in millimeters

### Get Weather Forecast

Retrieves a multi-day weather forecast for a specified location in Nepal.

**Endpoint:** `GET /mock/weather/forecast/{location}`

**Parameters:**
- `location` (required): The name of the location (e.g., Kathmandu, Pokhara, Bhaktapur)

**Example Request:**
```
GET https://mock.mygovresponse.com/weather/forecast/Kathmandu
```

**Example Response:**
```json
{
  "location": "Kathmandu",
  "forecast_date": "2025-04-17",
  "forecast": [
    {
      "date": "2025-04-17",
      "max_temp": "28",
      "min_temp": "16",
      "condition": "Clear",
      "rainfall": "0.0mm",
      "humidity": "65%"
    },
    {
      "date": "2025-04-18",
      "max_temp": "29",
      "min_temp": "17",
      "condition": "Partly Cloudy",
      "rainfall": "0.0mm",
      "humidity": "70%"
    },
    {
      "date": "2025-04-19",
      "max_temp": "27",
      "min_temp": "16",
      "condition": "Light Rain",
      "rainfall": "2.5mm",
      "humidity": "75%"
    }
  ]
}
```

**Response Fields:**
- `location`: The location for which forecast data is provided
- `forecast_date`: The date when the forecast was generated
- `forecast`: Array of daily forecast data
  - `date`: Date of the forecast
  - `max_temp`: Maximum temperature in Celsius
  - `min_temp`: Minimum temperature in Celsius
  - `condition`: Weather condition description
  - `rainfall`: Expected rainfall amount in millimeters
  - `humidity`: Humidity percentage

## Error Handling

The API returns the following error responses:

- **404 Not Found**: Location not found or invalid
- **500 Internal Server Error**: Server-side error

**Example Error Response:**
```json
{
  "status": "false",
  "message": "Location not found"
}
```

## Testing

The Weather API collection includes comprehensive tests to validate:
- Response status codes
- Response format and content type
- Data structure and required fields
- Data type validation
- Business logic validation

## Monitoring

The Weather API Monitor checks the health and performance of the weather data sources at regular intervals. It verifies:
- API availability
- Response time
- Data structure integrity
- Content validation

## Mock Data

Mock data is available for testing and as a fallback when the primary API is unavailable. The mock server provides consistent responses for development and testing purposes.

## Usage in Flows

The Weather API is used in the following Postman Flows:
- **Weather Alert & Holiday Planning Flow**: Combines weather data with holiday information and power outage alerts
- **Emergency Response Flow**: Uses weather data to enhance emergency response recommendations

## Rate Limits

The Nepal Weather API has the following rate limits:
- 60 requests per minute
- 1000 requests per day

## Authentication

The Nepal Weather API does not require authentication for basic usage.

## Additional Resources

- [Nepal Weather API GitHub Repository](https://github.com/anuragregmi/nepal-weather-api)
- [Official Documentation](https://nepal-weather-api.herokuapp.com/)
