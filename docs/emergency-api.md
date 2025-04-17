# Emergency API Documentation

## Overview

The Emergency API collection in the MyGov Response Hub provides access to emergency alerts, safety guidelines, and emergency contact information. This collection uses mock data to simulate real-world emergency services in Nepal.

## API Endpoints

### Get Emergency Alerts

Retrieves active emergency alerts for a specified district.

**Endpoint:** `GET /emergency/alerts`

**Parameters:**
- `district` (required): District name (e.g., kathmandu, lalitpur, bhaktapur)

**Example Request:**
```
GET https://mock.mygovresponse.com/emergency/alerts?district=kathmandu
```

**Example Response:**
```json
{
  "district": "kathmandu",
  "source": "Nepal Disaster Risk Reduction Portal",
  "last_updated": "2025-04-17T08:00:00Z",
  "alerts": [
    {
      "id": "ALERT-2025-04-17-001",
      "type": "Flood",
      "severity": "Moderate",
      "title": "Flood Warning for Bagmati River",
      "description": "Due to heavy rainfall in the catchment area, water levels in the Bagmati River are rising. Residents in low-lying areas should remain vigilant.",
      "issued_at": "2025-04-17T06:30:00Z",
      "valid_until": "2025-04-18T06:30:00Z",
      "affected_areas": ["Teku", "Kalimati", "Balkhu"],
      "instructions": "Move to higher ground if water levels continue to rise. Avoid crossing flooded areas.",
      "contact": {
        "phone": "1155",
        "email": "emergency@kathmandu.gov.np"
      }
    },
    {
      "id": "ALERT-2025-04-17-002",
      "type": "Weather",
      "severity": "Low",
      "title": "Heavy Rainfall Advisory",
      "description": "Heavy rainfall expected in Kathmandu Valley over the next 24 hours. Possibility of localized flooding in low-lying areas.",
      "issued_at": "2025-04-17T07:15:00Z",
      "valid_until": "2025-04-18T07:15:00Z",
      "affected_areas": ["All of Kathmandu district"],
      "instructions": "Ensure proper drainage around your property. Stay indoors during heavy rainfall.",
      "contact": {
        "phone": "1155",
        "email": "weather@kathmandu.gov.np"
      }
    }
  ]
}
```

**Response Fields:**
- `district`: The district for which alerts are provided
- `source`: Source of the alert information
- `last_updated`: Timestamp of when the data was last updated
- `alerts`: Array of active emergency alerts
  - `id`: Unique identifier for the alert
  - `type`: Type of emergency (Flood, Earthquake, Fire, Weather, etc.)
  - `severity`: Alert severity level (Low, Moderate, High, Severe, Extreme)
  - `title`: Short title of the alert
  - `description`: Detailed description of the emergency
  - `issued_at`: Timestamp when the alert was issued
  - `valid_until`: Timestamp until which the alert is valid
  - `affected_areas`: Array of areas affected by the emergency
  - `instructions`: Safety instructions for the public
  - `contact`: Emergency contact information

### Get Emergency Guidelines

Retrieves safety guidelines for a specific type of emergency.

**Endpoint:** `GET /emergency/guidelines`

**Parameters:**
- `type` (required): Type of emergency (earthquake, flood, fire, landslide)

**Example Request:**
```
GET https://mock.mygovresponse.com/emergency/guidelines?type=earthquake
```

**Example Response:**
```json
{
  "type": "earthquake",
  "source": "Nepal Disaster Risk Reduction Portal",
  "title": "Earthquake Safety Guidelines",
  "last_updated": "2025-03-15T10:00:00Z",
  "guidelines": {
    "before": [
      {
        "title": "Prepare an Emergency Kit",
        "description": "Include water, non-perishable food, first aid supplies, flashlight, batteries, and important documents."
      },
      {
        "title": "Create a Family Emergency Plan",
        "description": "Identify safe spots in each room, practice drop, cover, and hold on, and establish a family meeting place."
      },
      {
        "title": "Secure Heavy Items",
        "description": "Anchor heavy furniture, appliances, and hanging items to prevent them from falling during an earthquake."
      }
    ],
    "during": [
      {
        "title": "Drop, Cover, and Hold On",
        "description": "Drop to the ground, take cover under a sturdy table or desk, and hold on until the shaking stops."
      },
      {
        "title": "Stay Indoors",
        "description": "If you are indoors, stay there. Do not run outside during the shaking."
      },
      {
        "title": "If Outdoors",
        "description": "Move to an open area away from buildings, trees, streetlights, and utility wires."
      }
    ],
    "after": [
      {
        "title": "Check for Injuries",
        "description": "Provide first aid for anyone who needs it. Do not move seriously injured people unless they are in immediate danger."
      },
      {
        "title": "Check for Hazards",
        "description": "Look for and extinguish small fires. Check for gas leaks, water, and electrical system damage."
      },
      {
        "title": "Listen to Authorities",
        "description": "Listen to a battery-operated radio or television for the latest emergency information."
      }
    ]
  },
  "emergency_contacts": [
    {
      "name": "National Emergency Operation Center",
      "phone": "1155"
    },
    {
      "name": "Nepal Police",
      "phone": "100"
    },
    {
      "name": "Nepal Army",
      "phone": "1114"
    },
    {
      "name": "Ambulance Service",
      "phone": "102"
    }
  ],
  "resources": [
    {
      "title": "Nepal Disaster Risk Reduction Portal",
      "url": "http://drrportal.gov.np/"
    },
    {
      "title": "National Seismological Center",
      "url": "http://seismonepal.gov.np/"
    }
  ]
}
```

**Response Fields:**
- `type`: Type of emergency
- `source`: Source of the guidelines
- `title`: Title of the guidelines
- `last_updated`: Timestamp of when the guidelines were last updated
- `guidelines`: Object containing guidelines for different phases
  - `before`: Array of preparedness guidelines
  - `during`: Array of guidelines for during the emergency
  - `after`: Array of guidelines for after the emergency
- `emergency_contacts`: Array of emergency contact information
- `resources`: Array of additional resources

### Get Emergency Contacts

Retrieves emergency contact information for a specified district.

**Endpoint:** `GET /emergency/contacts`

**Parameters:**
- `district` (required): District name (e.g., kathmandu, lalitpur, bhaktapur)

**Example Request:**
```
GET https://mock.mygovresponse.com/emergency/contacts?district=kathmandu
```

**Example Response:**
```json
{
  "district": "kathmandu",
  "last_updated": "2025-04-01T12:00:00Z",
  "emergency_contacts": [
    {
      "category": "Police",
      "name": "Kathmandu Metropolitan Police",
      "phone": "100",
      "alt_phone": "01-4261945",
      "address": "Ranipokhari, Kathmandu"
    },
    {
      "category": "Fire",
      "name": "Kathmandu Fire Brigade",
      "phone": "101",
      "alt_phone": "01-4258333",
      "address": "Basantapur, Kathmandu"
    },
    {
      "category": "Ambulance",
      "name": "Nepal Ambulance Service",
      "phone": "102",
      "alt_phone": "01-4228094",
      "address": "Kathmandu"
    },
    {
      "category": "Hospital",
      "name": "Bir Hospital",
      "phone": "01-4221119",
      "alt_phone": "01-4221988",
      "address": "Kanti Path, Kathmandu"
    },
    {
      "category": "Disaster Management",
      "name": "National Emergency Operation Center",
      "phone": "1155",
      "alt_phone": "01-4200105",
      "address": "Singha Durbar, Kathmandu"
    }
  ]
}
```

**Response Fields:**
- `district`: The district for which contacts are provided
- `last_updated`: Timestamp of when the data was last updated
- `emergency_contacts`: Array of emergency contact information
  - `category`: Category of the emergency service
  - `name`: Name of the emergency service
  - `phone`: Primary phone number
  - `alt_phone`: Alternative phone number
  - `address`: Physical address of the service

## Error Handling

The API returns the following error responses:

- **400 Bad Request**: Invalid parameters
- **404 Not Found**: District or emergency type not found
- **500 Internal Server Error**: Server-side error

**Example Error Response:**
```json
{
  "error": {
    "code": 404,
    "message": "Emergency type not found"
  }
}
```

## Testing

The Emergency API collection includes comprehensive tests to validate:
- Response status codes
- Response format and content type
- Data structure and required fields
- Alert severity validation
- Date format validation

## Monitoring

The Emergency API Monitor checks the health and performance of the emergency data sources at regular intervals. It verifies:
- API availability
- Response time
- Data structure integrity
- Content validation

## Mock Data

This API primarily uses mock data to simulate real-world emergency services. The mock server provides consistent responses for development and testing purposes.

## Usage in Flows

The Emergency API is used in the following Postman Flows:
- **Emergency Response Flow**: Integrates emergency alerts with transportation routing and service status

## Rate Limits

As this is a mock API, there are no specific rate limits implemented.

## Authentication

The mock Emergency API does not require authentication for basic usage.

## Additional Resources

- [Nepal Disaster Risk Reduction Portal](http://drrportal.gov.np/)
- [National Emergency Operation Center](http://neoc.gov.np/)
- [Nepal Red Cross Society](https://nrcs.org/)
