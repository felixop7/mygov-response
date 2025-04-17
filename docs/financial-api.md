# Financial API Documentation

## Overview

The Financial API collection in the MyGov Response Hub provides access to financial data including currency exchange rates and stock market information. This collection integrates with the Nepal Rastra Bank forex data and Yahoo Finance API.

## API Endpoints

### Get Latest Forex Rates

Retrieves the latest currency exchange rates from Nepal Rastra Bank.

**Endpoint:** `GET /finance/forex/latest`

**Parameters:**
- None required

**Example Request:**
```
GET https://mock.mygovresponse.com/finance/forex/latest
```

**Example Response:**
```json
{
  "date": "2025-04-17",
  "base_currency": "NPR",
  "source": "Nepal Rastra Bank",
  "rates": {
    "USD": {
      "buy": 132.45,
      "sell": 133.05
    },
    "EUR": {
      "buy": 143.78,
      "sell": 144.50
    },
    "GBP": {
      "buy": 166.32,
      "sell": 167.15
    },
    "INR": {
      "buy": 1.58,
      "sell": 1.60
    }
  }
}
```

**Response Fields:**
- `date`: Date of the exchange rates
- `base_currency`: Base currency (NPR - Nepalese Rupee)
- `source`: Source of the exchange rate data
- `rates`: Object containing exchange rates for various currencies
  - Each currency has `buy` and `sell` rates

### Get Historical Forex Rates

Retrieves historical currency exchange rates for a specific date.

**Endpoint:** `GET /finance/forex/historical`

**Parameters:**
- `date` (required): Date in YYYY-MM-DD format

**Example Request:**
```
GET https://mock.mygovresponse.com/finance/forex/historical?date=2025-04-10
```

**Example Response:**
```json
{
  "date": "2025-04-10",
  "base_currency": "NPR",
  "source": "Nepal Rastra Bank",
  "rates": {
    "USD": {
      "buy": 131.95,
      "sell": 132.55
    },
    "EUR": {
      "buy": 142.88,
      "sell": 143.60
    },
    "GBP": {
      "buy": 165.75,
      "sell": 166.58
    },
    "INR": {
      "buy": 1.57,
      "sell": 1.59
    }
  }
}
```

### Get Stock Market Data

Retrieves stock market data for a specified symbol.

**Endpoint:** `GET /get_stock_chart`

**Parameters:**
- `symbol` (required): Stock symbol (e.g., AAPL, MSFT)
- `interval` (required): Data interval (1m, 2m, 5m, 15m, 30m, 60m, 1d, 1wk, 1mo)
- `range` (required): Date range (1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max)

**Example Request:**
```
GET https://api.example.com/yahoofinance/get_stock_chart?symbol=AAPL&interval=1d&range=1mo
```

**Example Response:**
```json
{
  "chart": {
    "result": [
      {
        "meta": {
          "currency": "USD",
          "symbol": "AAPL",
          "exchangeName": "NMS",
          "instrumentType": "EQUITY",
          "firstTradeDate": 345479400,
          "regularMarketTime": 1681728000,
          "gmtoffset": -14400,
          "timezone": "EDT",
          "exchangeTimezoneName": "America/New_York",
          "regularMarketPrice": 169.75,
          "chartPreviousClose": 165.23,
          "priceHint": 2
        },
        "timestamp": [
          1681728000,
          1681814400,
          1681900800,
          1681987200,
          1682073600
        ],
        "indicators": {
          "quote": [
            {
              "open": [
                165.05,
                166.10,
                167.90,
                166.85,
                169.20
              ],
              "high": [
                166.45,
                167.87,
                168.30,
                168.45,
                170.95
              ],
              "low": [
                164.30,
                165.65,
                166.80,
                165.25,
                168.45
              ],
              "close": [
                166.10,
                167.63,
                167.15,
                168.41,
                169.75
              ],
              "volume": [
                52422300,
                48175000,
                51235800,
                45287600,
                59128000
              ]
            }
          ],
          "adjclose": [
            {
              "adjclose": [
                166.10,
                167.63,
                167.15,
                168.41,
                169.75
              ]
            }
          ]
        }
      }
    ],
    "error": null
  }
}
```

**Response Fields:**
- `chart`: Container for chart data
  - `result`: Array containing the result data
    - `meta`: Metadata about the stock
    - `timestamp`: Array of timestamps for data points
    - `indicators`: Contains price and volume data
      - `quote`: Contains open, high, low, close, and volume data
      - `adjclose`: Contains adjusted close prices

## Error Handling

The API returns the following error responses:

- **400 Bad Request**: Invalid parameters
- **404 Not Found**: Symbol or data not found
- **429 Too Many Requests**: Rate limit exceeded
- **500 Internal Server Error**: Server-side error

**Example Error Response:**
```json
{
  "error": {
    "code": 404,
    "message": "Symbol not found"
  }
}
```

## Testing

The Financial API collection includes comprehensive tests to validate:
- Response status codes
- Response format and content type
- Data structure and required fields
- Currency rate validation
- Stock data validation

## Monitoring

The Financial API Monitor checks the health and performance of the financial data sources at regular intervals. It verifies:
- API availability
- Response time
- Data structure integrity
- Content validation

## Mock Data

Mock data is available for testing and as a fallback when the primary APIs are unavailable. The mock server provides consistent responses for development and testing purposes.

## Usage in Flows

The Financial API is used in the following Postman Flows:
- **Financial Planning Flow**: Combines currency exchange rates with utility service information for financial planning

## Rate Limits

- Nepal Rastra Bank data: No specific rate limits
- Yahoo Finance API: 
  - Free tier: 100 requests per day
  - Pro tier: 10,000 requests per day

## Authentication

- Nepal Rastra Bank data: No authentication required
- Yahoo Finance API: API key required for production use

## Additional Resources

- [Nepal Rastra Bank Official Website](https://www.nrb.org.np/)
- [Yahoo Finance API Documentation](https://www.yahoofinanceapi.com/)
