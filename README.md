# MyGov Response Hub

![MyGov Response Hub Logo](assets/logo.png)

## Project Overview

The MyGov Response Hub is a comprehensive Postman-based solution designed to integrate and streamline access to critical government services in Nepal. This project demonstrates how Postman can be leveraged to create a unified platform for accessing weather information, holiday calendars, transportation services, financial data, utility status, and emergency services.

By combining multiple APIs into a cohesive ecosystem with automated workflows, testing, and monitoring, the MyGov Response Hub showcases Postman's capabilities as a complete API development and integration platform.

## Key Features

- **Integrated API Collections**: Organized collections for six essential service categories
- **Comprehensive Testing**: Thorough validation for all API endpoints
- **Automated Workflows**: Three sophisticated Postman Flows for real-world scenarios
- **Continuous Monitoring**: Health checks for all critical services
- **Mock Servers**: Fallback data sources when primary APIs are unavailable
- **Nepal-Specific Focus**: Prioritizing local APIs and services

## Collections

The MyGov Response Hub includes the following API collections:

### Weather Services

- Nepal Weather API integration
- Location-based weather forecasts
- Weather alerts and warnings

### Calendar & Holiday Services

- Nepal Events API integration
- Holiday information in both AD and BS calendars
- Event notifications and reminders

### Transportation & Maps

- Baato Maps API integration
- Route planning and navigation
- Public transportation information

### Financial Services

- Nepal Rastra Bank forex data
- Currency exchange rates
- Stock market information

### Utility Services

- Electricity status and outage information
- Water supply status
- Internet service provider status

### Emergency Services

- Emergency alerts and notifications
- Safety guidelines and protocols
- Emergency contact information

## Automated Flows

The project includes three sophisticated Postman Flows that demonstrate real-world automation scenarios:

### Weather Alert & Holiday Planning Flow

This flow combines weather forecasts with holiday information and potential power outage alerts to provide a comprehensive daily planning tool. It helps users prepare for their day by considering weather conditions, holiday schedules, and potential utility disruptions.

### Emergency Response Flow

This flow integrates emergency alerts with transportation routing and service status information to provide critical guidance during emergencies. It delivers personalized evacuation routes, safety instructions, and emergency contact information based on the user's location and the nature of the emergency.

### Financial Planning Flow

This flow combines currency exchange rates with utility service information to help users make informed financial decisions. It provides insights into currency trends, stock market performance, and potential financial impacts of scheduled power outages.

## Monitors

The MyGov Response Hub includes comprehensive monitoring for all API collections:

- **Weather API Monitor**: Checks the health and performance of weather data sources
- **Holiday API Monitor**: Ensures calendar and holiday information is up-to-date
- **Transportation & Emergency API Monitor**: Verifies the availability of critical services
- **Financial & Utility API Monitor**: Tracks the status of financial and utility information sources

## Getting Started

### Prerequisites

- Postman (latest version)
- API keys for the following services:
  - Baato Maps API
  - Yahoo Finance API (for stock data)

### Installation

1. Clone this repository:

```
git clone https://github.com/yourusername/mygov-response-hub.git
```

2. Import the collections into Postman:

   - Open Postman
   - Click "Import" and select the collection files from the `collections` directory

3. Set up environment variables:

   - Create a new environment in Postman
   - Add the following variables:
     - `mock_server_url`: URL of your mock server
     - `baato_api_key`: Your Baato Maps API key
     - `yahoo_finance_api_url`: URL for Yahoo Finance API

4. Import the Flows:

   - In Postman, navigate to the Flows tab
   - Click "Import" and select the flow files from the `flows` directory

5. Set up Monitors:
   - In Postman, navigate to the Monitors tab
   - Click "Create" and import the monitor configurations from the `monitors` directory

## Project Structure

```
mygov-response-hub/
├── collections/           # Postman API collections
│   ├── weather_collection.json
│   ├── holiday_collection.json
│   ├── transportation_collection.json
│   ├── financial_collection.json
│   ├── utility_collection.json
│   └── emergency_collection.json
├── tests/                 # Postman tests for API validation
│   ├── weather_tests.json
│   ├── holiday_tests.json
│   ├── transportation_tests.json
│   ├── financial_tests.json
│   ├── utility_tests.json
│   └── emergency_tests.json
├── flows/                 # Postman Flows for automation
│   ├── weather_holiday_flow.json
│   ├── emergency_response_flow.json
│   └── financial_planning_flow.json
├── monitors/              # Postman Monitors for API health checks
│   ├── weather_monitor.json
│   ├── holiday_monitor.json
│   ├── transportation_emergency_monitor.json
│   └── financial_utility_monitor.json
├── mock-data/             # Mock data for fallback scenarios
├── docs/                  # Additional documentation
├── assets/                # Images and other assets
└── README.md              # Project documentation
```

## API Documentation

Detailed documentation for each API collection is available in the `docs` directory:

- [Weather API Documentation](docs/weather-api.md)
- [Holiday API Documentation](docs/holiday-api.md)
- [Transportation API Documentation](docs/transportation-api.md)
- [Financial API Documentation](docs/financial-api.md)
- [Utility API Documentation](docs/utility-api.md)
- [Emergency API Documentation](docs/emergency-api.md)

## Mock Servers

The MyGov Response Hub includes mock servers for all API collections to ensure reliability and consistent testing. These mock servers provide fallback data when primary APIs are unavailable.

To use the mock servers:

1. In Postman, navigate to the Mock Servers tab
2. Import the mock server configurations from the `mock-data` directory
3. Update the `mock_server_url` environment variable with your mock server URL

## Contributing

Contributions to the MyGov Response Hub are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Nepal Weather API by Anurag Regmi
- npEventsAPI by casualsnek
- Baato Maps API
- Nepal Rastra Bank for financial data

## Contact

For questions or feedback about this project, please contact:

- Email: roshansahani226@gmail.com
- Twitter: [@felixop7](https://twitter.com/felixop7)

---
