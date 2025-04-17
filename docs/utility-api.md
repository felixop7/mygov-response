# Utility API Documentation

## Overview

The Utility API collection in the MyGov Response Hub provides access to utility service information including electricity status, power outages, water supply, and internet service provider status. This collection primarily uses mock data to simulate real-world utility services in Nepal.

## API Endpoints

### Get Electricity Status

Retrieves the current status of electricity services for a specified district.

**Endpoint:** `GET /utility/electricity/status`

**Parameters:**
- `district` (required): District name (e.g., kathmandu, lalitpur, bhaktapur)

**Example Request:**
```
GET https://mock.mygovresponse.com/utility/electricity/status?district=kathmandu
```

**Example Response:**
```json
{
  "district": "kathmandu",
  "overall_status": "Normal",
  "last_updated": "2025-04-17T08:30:00Z",
  "areas": [
    {
      "name": "Thamel",
      "status": "Normal",
      "last_updated": "2025-04-17T08:15:00Z"
    },
    {
      "name": "Balaju",
      "status": "Outage",
      "reason": "Maintenance",
      "estimated_restoration": "2025-04-17T14:00:00Z",
      "last_updated": "2025-04-17T07:45:00Z"
    },
    {
      "name": "Kalanki",
      "status": "Limited",
      "reason": "High demand",
      "last_updated": "2025-04-17T08:20:00Z"
    }
  ],
  "announcements": [
    {
      "title": "Scheduled Maintenance",
      "message": "Scheduled maintenance in Balaju area from 10:00 AM to 2:00 PM today.",
      "published_at": "2025-04-16T18:00:00Z"
    }
  ]
}
```

**Response Fields:**
- `district`: The district for which status is provided
- `overall_status`: Overall electricity status (Normal, Limited, Outage)
- `last_updated`: Timestamp of when the data was last updated
- `areas`: Array of area-specific status information
  - `name`: Area name
  - `status`: Current status (Normal, Limited, Outage)
  - `reason`: Reason for non-normal status (if applicable)
  - `estimated_restoration`: Estimated time when service will be restored (if applicable)
- `announcements`: Array of relevant announcements

### Get Scheduled Power Cuts

Retrieves scheduled power outages for a specified district and date.

**Endpoint:** `GET /utility/electricity/powercuts`

**Parameters:**
- `district` (required): District name (e.g., kathmandu, lalitpur, bhaktapur)
- `date` (required): Date in YYYY-MM-DD format

**Example Request:**
```
GET https://mock.mygovresponse.com/utility/electricity/powercuts?district=kathmandu&date=2025-04-17
```

**Example Response:**
```json
{
  "district": "kathmandu",
  "date": "2025-04-17",
  "last_updated": "2025-04-16T18:00:00Z",
  "scheduled_power_cuts": [
    {
      "id": "PC-2025-04-17-001",
      "area": "Balaju",
      "start_time": "10:00",
      "end_time": "14:00",
      "reason": "Scheduled maintenance",
      "affected_feeders": ["Balaju-1", "Balaju-2"]
    },
    {
      "id": "PC-2025-04-17-002",
      "area": "Baneshwor",
      "start_time": "13:00",
      "end_time": "17:00",
      "reason": "Grid upgrade",
      "affected_feeders": ["Baneshwor-Main"]
    }
  ]
}
```

**Response Fields:**
- `district`: The district for which power cut information is provided
- `date`: The date for which power cut information is provided
- `last_updated`: Timestamp of when the data was last updated
- `scheduled_power_cuts`: Array of scheduled power outages
  - `id`: Unique identifier for the power cut
  - `area`: Affected area
  - `start_time`: Start time in 24-hour format (HH:MM)
  - `end_time`: End time in 24-hour format (HH:MM)
  - `reason`: Reason for the power cut
  - `affected_feeders`: Array of affected electrical feeders

### Get Water Supply Status

Retrieves the current status of water supply services for a specified district.

**Endpoint:** `GET /utility/water/status`

**Parameters:**
- `district` (required): District name (e.g., kathmandu, lalitpur, bhaktapur)

**Example Request:**
```
GET https://mock.mygovresponse.com/utility/water/status?district=kathmandu
```

**Example Response:**
```json
{
  "district": "kathmandu",
  "overall_status": "Limited",
  "last_updated": "2025-04-17T08:00:00Z",
  "areas": [
    {
      "name": "Thamel",
      "status": "Normal",
      "schedule": "Daily, 6:00-9:00 AM",
      "last_updated": "2025-04-17T07:30:00Z"
    },
    {
      "name": "Balaju",
      "status": "Limited",
      "schedule": "Alternate days, 6:00-8:00 AM",
      "reason": "Low reservoir levels",
      "last_updated": "2025-04-17T07:45:00Z"
    },
    {
      "name": "Kalanki",
      "status": "Disrupted",
      "reason": "Pipe maintenance",
      "estimated_restoration": "2025-04-18T18:00:00Z",
      "last_updated": "2025-04-17T07:15:00Z"
    }
  ],
  "announcements": [
    {
      "title": "Water Conservation Notice",
      "message": "Due to low reservoir levels, please conserve water. Supply is limited in several areas.",
      "published_at": "2025-04-16T12:00:00Z"
    }
  ]
}
```

### Get Internet Service Status

Retrieves the current status of internet service providers for a specified district.

**Endpoint:** `GET /utility/internet/status`

**Parameters:**
- `district` (required): District name (e.g., kathmandu, lalitpur, bhaktapur)

**Example Request:**
```
GET https://mock.mygovresponse.com/utility/internet/status?district=kathmandu
```

**Example Response:**
```json
{
  "district": "kathmandu",
  "last_updated": "2025-04-17T09:00:00Z",
  "providers": [
    {
      "name": "WorldLink",
      "status": "Operational",
      "issues": [],
      "last_updated": "2025-04-17T08:45:00Z"
    },
    {
      "name": "Subisu",
      "status": "Degraded",
      "issues": [
        {
          "type": "Slow speeds",
          "affected_areas": ["Balaju", "Kalanki"],
          "reason": "Fiber maintenance",
          "estimated_resolution": "2025-04-17T15:00:00Z"
        }
      ],
      "last_updated": "2025-04-17T08:30:00Z"
    },
    {
      "name": "NTC",
      "status": "Operational",
      "issues": [],
      "last_updated": "2025-04-17T08:50:00Z"
    }
  ],
  "announcements": [
    {
      "title": "Subisu Maintenance Notice",
      "message": "Scheduled maintenance on Subisu fiber network from 10:00 AM to 3:00 PM today.",
      "published_at": "2025-04-16T18:00:00Z"
    }
  ]
}
```

## Error Handling

The API returns the following error responses:

- **400 Bad Request**: Invalid parameters
- **404 Not Found**: District not found
- **500 Internal Server Error**: Server-side error

**Example Error Response:**
```json
{
  "error": {
    "code": 404,
    "message": "District not found"
  }
}
```

## Testing

The Utility API collection includes comprehensive tests to validate:
- Response status codes
- Response format and content type
- Data structure and required fields
- Status validation
- Time format validation

## Monitoring

The Utility API Monitor checks the health and performance of the utility data sources at regular intervals. It verifies:
- API availability
- Response time
- Data structure integrity
- Content validation

## Mock Data

This API primarily uses mock data to simulate real-world utility services. The mock server provides consistent responses for development and testing purposes.

## Usage in Flows

The Utility API is used in the following Postman Flows:
- **Weather Alert & Holiday Planning Flow**: Includes power outage information in daily planning
- **Financial Planning Flow**: Combines utility service information with financial data for cost planning

## Rate Limits

As this is a mock API, there are no specific rate limits implemented.

## Authentication

The mock Utility API does not require authentication for basic usage.

## Additional Resources

- [Nepal Electricity Authority](https://www.nea.org.np/)
- [Kathmandu Upatyaka Khanepani Limited](https://kathmanduwater.org/)
- [Nepal Telecommunications Authority](https://nta.gov.np/)
