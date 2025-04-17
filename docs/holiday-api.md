# Holiday API Documentation

## Overview

The Holiday API collection in the MyGov Response Hub provides access to holiday and calendar event data for Nepal. This collection integrates with the npEventsAPI and includes support for both AD (Gregorian) and BS (Bikram Sambat) calendar systems.

## API Endpoints

### Get Holiday Information by AD Date

Retrieves holiday and event information for a specified date in the Gregorian calendar.

**Endpoint:** `GET /v2/date/ad/{date}`

**Parameters:**
- `date` (required): Date in YYYY-MM-DD format (e.g., 2025-04-17)

**Example Request:**
```
GET https://npclapi.casualsnek.eu.org/v2/date/ad/2025-04-17
```

**Example Response:**
```json
{
  "2025": {
    "4": {
      "17": {
        "ad": "2025-04-17",
        "bs": "2082-01-04",
        "day": "Thursday",
        "tithi": "Pratipada",
        "event": ["Nepali New Year"],
        "public_holiday": true
      }
    }
  }
}
```

**Response Fields:**
- Nested structure with year, month, and day as keys
- `ad`: Gregorian calendar date
- `bs`: Corresponding Bikram Sambat date
- `day`: Day of the week
- `tithi`: Lunar day according to Hindu calendar
- `event`: Array of events or holidays on this date
- `public_holiday`: Boolean indicating if it's a public holiday

### Get Holiday Information by BS Date

Retrieves holiday and event information for a specified date in the Bikram Sambat calendar.

**Endpoint:** `GET /v2/date/bs/{date}`

**Parameters:**
- `date` (required): Date in YYYY-MM-DD format (e.g., 2082-01-04)

**Example Request:**
```
GET https://npclapi.casualsnek.eu.org/v2/date/bs/2082-01-04
```

**Example Response:**
```json
{
  "2082": {
    "1": {
      "4": {
        "ad": "2025-04-17",
        "bs": "2082-01-04",
        "day": "Thursday",
        "tithi": "Pratipada",
        "event": ["Nepali New Year"],
        "public_holiday": true
      }
    }
  }
}
```

### Get Monthly Calendar (AD)

Retrieves a complete calendar for a specified month in the Gregorian calendar.

**Endpoint:** `GET /v2/month/ad/{year}/{month}`

**Parameters:**
- `year` (required): Year in YYYY format
- `month` (required): Month in MM format (1-12)

**Example Request:**
```
GET https://npclapi.casualsnek.eu.org/v2/month/ad/2025/4
```

**Example Response:**
```json
{
  "2025": {
    "4": {
      "1": {
        "ad": "2025-04-01",
        "bs": "2081-12-18",
        "day": "Tuesday",
        "tithi": "Panchami",
        "event": [],
        "public_holiday": false
      },
      "2": {
        "ad": "2025-04-02",
        "bs": "2081-12-19",
        "day": "Wednesday",
        "tithi": "Sasthi",
        "event": [],
        "public_holiday": false
      },
      // ... additional days ...
      "17": {
        "ad": "2025-04-17",
        "bs": "2082-01-04",
        "day": "Thursday",
        "tithi": "Pratipada",
        "event": ["Nepali New Year"],
        "public_holiday": true
      }
      // ... remaining days of the month ...
    }
  }
}
```

### Get Monthly Calendar (BS)

Retrieves a complete calendar for a specified month in the Bikram Sambat calendar.

**Endpoint:** `GET /v2/month/bs/{year}/{month}`

**Parameters:**
- `year` (required): Year in YYYY format
- `month` (required): Month in MM format (1-12)

**Example Request:**
```
GET https://npclapi.casualsnek.eu.org/v2/month/bs/2082/1
```

## Error Handling

The API returns the following error responses:

- **400 Bad Request**: Invalid date format
- **404 Not Found**: Date not found in the calendar
- **500 Internal Server Error**: Server-side error

**Example Error Response:**
```json
{
  "error": "Invalid date format. Use YYYY-MM-DD"
}
```

## Testing

The Holiday API collection includes comprehensive tests to validate:
- Response status codes
- Response format and content type
- Data structure and required fields
- Date conversion accuracy
- Holiday information accuracy

## Monitoring

The Holiday API Monitor checks the health and performance of the calendar data sources at regular intervals. It verifies:
- API availability
- Response time
- Data structure integrity
- Content validation

## Mock Data

Mock data is available for testing and as a fallback when the primary API is unavailable. The mock server provides consistent responses for development and testing purposes.

## Usage in Flows

The Holiday API is used in the following Postman Flows:
- **Weather Alert & Holiday Planning Flow**: Combines holiday information with weather data and power outage alerts

## Rate Limits

The npEventsAPI has the following rate limits:
- 100 requests per minute
- 2000 requests per day

## Authentication

The npEventsAPI does not require authentication for basic usage.

## Additional Resources

- [npEventsAPI GitHub Repository](https://github.com/casualsnek/npEventsAPI)
- [Bikram Sambat Calendar Information](https://en.wikipedia.org/wiki/Vikram_Samvat)
