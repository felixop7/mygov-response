document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation highlighting based on scroll position
    const sections = document.querySelectorAll('section[id]');
    function highlightNavigation() {
        const scrollPosition = window.scrollY + 100;
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-menu a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    window.addEventListener('scroll', highlightNavigation);

    // Modal functionality for collection details
    const modal = document.getElementById('collection-modal');
    const modalContent = document.getElementById('modal-content-container');
    const closeModal = document.querySelector('.close-modal');

    // Collection data for modal content
    const collectionData = {
        weather: {
            title: "Weather Services API",
            description: "The Weather API collection in the MyGov Response Hub provides access to weather data for locations across Nepal. This collection integrates with the Nepal Weather API and includes fallback mock data to ensure reliability.",
            endpoints: [
                {
                    name: "Get Weather by Location",
                    method: "GET",
                    path: "/api/?place={location}",
                    description: "Retrieves current weather information for a specified location in Nepal."
                },
                {
                    name: "Get Weather Forecast",
                    method: "GET",
                    path: "/mock/weather/forecast/{location}",
                    description: "Retrieves a multi-day weather forecast for a specified location in Nepal."
                }
            ],
            features: [
                "Location-based weather data",
                "Temperature ranges (min/max)",
                "Rainfall information",
                "Multi-day forecasts",
                "Weather alerts and warnings"
            ]
        },
        holiday: {
            title: "Calendar & Holiday Services API",
            description: "The Holiday API collection provides access to holiday and calendar event data for Nepal. This collection integrates with the npEventsAPI and includes support for both AD (Gregorian) and BS (Bikram Sambat) calendar systems.",
            endpoints: [
                {
                    name: "Get Holiday Information by AD Date",
                    method: "GET",
                    path: "/v2/date/ad/{date}",
                    description: "Retrieves holiday and event information for a specified date in the Gregorian calendar."
                },
                {
                    name: "Get Holiday Information by BS Date",
                    method: "GET",
                    path: "/v2/date/bs/{date}",
                    description: "Retrieves holiday and event information for a specified date in the Bikram Sambat calendar."
                },
                {
                    name: "Get Monthly Calendar (AD)",
                    method: "GET",
                    path: "/v2/month/ad/{year}/{month}",
                    description: "Retrieves a complete calendar for a specified month in the Gregorian calendar."
                }
            ],
            features: [
                "Support for both AD and BS calendars",
                "Holiday information and event details",
                "Lunar day (tithi) information",
                "Public holiday indicators",
                "Monthly calendar views"
            ]
        },
        transportation: {
            title: "Transportation & Maps API",
            description: "The Transportation API collection provides access to transportation and mapping data for Nepal. This collection integrates with the Baato Maps API and includes functionality for location search, route planning, and navigation.",
            endpoints: [
                {
                    name: "Search Locations",
                    method: "GET",
                    path: "/api/v1/search",
                    description: "Searches for locations based on a query string."
                },
                {
                    name: "Get Directions",
                    method: "GET",
                    path: "/api/v1/directions",
                    description: "Retrieves directions between two or more points."
                },
                {
                    name: "Get Reverse Geocoding",
                    method: "GET",
                    path: "/api/v1/reverse",
                    description: "Retrieves location information for a given coordinate."
                }
            ],
            features: [
                "Location search and geocoding",
                "Turn-by-turn navigation",
                "Multiple transportation modes (car, bike, foot)",
                "Distance and duration calculations",
                "Public transportation information"
            ]
        },
        financial: {
            title: "Financial Services API",
            description: "The Financial API collection provides access to financial data including currency exchange rates and stock market information. This collection integrates with the Nepal Rastra Bank forex data and Yahoo Finance API.",
            endpoints: [
                {
                    name: "Get Latest Forex Rates",
                    method: "GET",
                    path: "/finance/forex/latest",
                    description: "Retrieves the latest currency exchange rates from Nepal Rastra Bank."
                },
                {
                    name: "Get Historical Forex Rates",
                    method: "GET",
                    path: "/finance/forex/historical",
                    description: "Retrieves historical currency exchange rates for a specific date."
                },
                {
                    name: "Get Stock Market Data",
                    method: "GET",
                    path: "/get_stock_chart",
                    description: "Retrieves stock market data for a specified symbol."
                }
            ],
            features: [
                "Currency exchange rates (buy/sell)",
                "Historical exchange rate data",
                "Stock market information",
                "Price and volume data",
                "Financial trend analysis"
            ]
        },
        utility: {
            title: "Utility Services API",
            description: "The Utility API collection provides access to utility service information including electricity status, power outages, water supply, and internet service provider status.",
            endpoints: [
                {
                    name: "Get Electricity Status",
                    method: "GET",
                    path: "/utility/electricity/status",
                    description: "Retrieves the current status of electricity services for a specified district."
                },
                {
                    name: "Get Scheduled Power Cuts",
                    method: "GET",
                    path: "/utility/electricity/powercuts",
                    description: "Retrieves scheduled power outages for a specified district and date."
                },
                {
                    name: "Get Water Supply Status",
                    method: "GET",
                    path: "/utility/water/status",
                    description: "Retrieves the current status of water supply services for a specified district."
                },
                {
                    name: "Get Internet Service Status",
                    method: "GET",
                    path: "/utility/internet/status",
                    description: "Retrieves the current status of internet service providers for a specified district."
                }
            ],
            features: [
                "Electricity service status by area",
                "Scheduled power outage information",
                "Water supply schedules and status",
                "Internet service provider status",
                "Service disruption notifications"
            ]
        },
        emergency: {
            title: "Emergency Services API",
            description: "The Emergency API collection provides access to emergency alerts, safety guidelines, and emergency contact information.",
            endpoints: [
                {
                    name: "Get Emergency Alerts",
                    method: "GET",
                    path: "/emergency/alerts",
                    description: "Retrieves active emergency alerts for a specified district."
                },
                {
                    name: "Get Emergency Guidelines",
                    method: "GET",
                    path: "/emergency/guidelines",
                    description: "Retrieves safety guidelines for a specific type of emergency."
                },
                {
                    name: "Get Emergency Contacts",
                    method: "GET",
                    path: "/emergency/contacts",
                    description: "Retrieves emergency contact information for a specified district."
                }
            ],
            features: [
                "Real-time emergency alerts",
                "Safety guidelines for different emergencies",
                "Emergency contact information",
                "Evacuation route recommendations",
                "Disaster preparedness information"
            ]
        }
    };

    // Open modal with collection details
    document.querySelectorAll('.collection-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const collectionType = this.getAttribute('data-collection');
            const collection = collectionData[collectionType];
            if (collection) {
                let endpointsHTML = '';
                collection.endpoints.forEach(endpoint => {
                    endpointsHTML += `
                        <div class="endpoint">
                            <h4>${endpoint.name}</h4>
                            <div class="endpoint-method"><span class="method ${endpoint.method.toLowerCase()}">${endpoint.method}</span>
                                <code>${endpoint.path}</code>
                            </div>
                            <p>${endpoint.description}</p>
                        </div>
                    `;
                });
                let featuresHTML = '';
                collection.features.forEach(feature => {
                    featuresHTML += `<li><i class="fas fa-check"></i> ${feature}</li>`;
                });
                modalContent.innerHTML = `
                    <h2>${collection.title}</h2>
                    <p class="collection-description">${collection.description}</p>
                    <div class="collection-details">
                        <div class="endpoints-section">
                            <h3>API Endpoints</h3>
                            <div class="endpoints-container">
                                ${endpointsHTML}
                            </div>
                        </div>
                        <div class="features-section">
                            <h3>Key Features</h3>
                            <ul class="features-list">
                                ${featuresHTML}
                            </ul>
                        </div>
                    </div>
                `;
                // Add styles for modal content
                const style = document.createElement('style');
                style.textContent = `
                    .collection-description {
                        margin-bottom: 20px;
                        font-size: 1.1rem;
                    }
                    .collection-details {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 30px;
                    }
                    @media (min-width: 768px) {
                        .collection-details {
                            grid-template-columns: 3fr 2fr;
                        }
                    }
                    .endpoints-section h3,
                    .features-section h3 {
                        margin-bottom: 15px;
                        color: #c31432;
                        border-bottom: 2px solid #eee;
                        padding-bottom: 10px;
                    }
                    .endpoint {
                        background: #f9f9f9;
                        padding: 15px;
                        margin-bottom: 15px;
                        border-radius: 8px;
                    }
                    .endpoint h4 {
                        margin-top: 0;
                        margin-bottom: 10px;
                    }
                    .endpoint-method {
                        display: flex;
                        align-items: center;
                        margin-bottom: 10px;
                    }
                    .method {
                        display: inline-block;
                        padding: 3px 8px;
                        border-radius: 4px;
                        color: white;
                        font-weight: bold;
                        margin-right: 10px;
                        font-size: 0.8rem;
                    }
                    .get {
                        background-color: #61affe;
                    }
                    .post {
                        background-color: #49cc90;
                    }
                    .put {
                        background-color: #fca130;
                    }
                    .delete {
                        background-color: #f93e3e;
                    }
                    .features-list {
                        list-style: none;
                        padding: 0;
                    }
                    .features-list li {
                        margin-bottom: 10px;
                        font-size: 1rem;
                    }
                    .features-list i {
                        color: #49cc90;
                        margin-right: 8px;
                    }
                `;
                modalContent.appendChild(style);
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal on X or outside click
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        modalContent.innerHTML = '';
    });
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            modalContent.innerHTML = '';
        }
    });

    // Interactive Section (placeholder, can be extended)
    const interactiveSection = document.getElementById('interactive');
    if (interactiveSection) {
        interactiveSection.innerHTML = `
            <div class="container">
                <div class="section-header">
                    <h2>Interactive Demo</h2>
                    <div class="underline"></div>
                </div>
                <div class="interactive-demo">
                    <p>Try out our API endpoints directly from this page (demo only):</p>
                    <button class="btn btn-primary" id="try-weather">Try Weather API</button>
                    <div id="interactive-result" style="margin-top:20px;"></div>
                </div>
            </div>
        `;
        document.getElementById('try-weather').addEventListener('click', function() {
            const resultDiv = document.getElementById('interactive-result');
            resultDiv.innerHTML = `<div class="loading"><i class="fas fa-spinner fa-spin"></i> Fetching weather data...</div>`;
            // Demo: Simulate API call
            setTimeout(() => {
                resultDiv.innerHTML = `
                    <div class="api-demo-result">
                        <h4>Sample Weather Result</h4>
                        <pre>{
    "location": "Kathmandu",
    "temperature": {
        "min": 12,
        "max": 24
    },
    "condition": "Partly Cloudy",
    "rainfall_mm": 2.5,
    "alert": "None"
}</pre>
                    </div>
                `;
            }, 1200);
        });
    }

    // Documentation links (dummy, replace with actual URLs as needed)
    document.getElementById('api-docs-link')?.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://github.com/felixop7/mygov-response/blob/main/README.md', '_blank');
    });
    document.getElementById('installation-link')?.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://github.com/felixop7/mygov-response/blob/main/README.md', '_blank');
    });
    document.getElementById('flow-tutorials-link')?.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://docs.github.com/en/get-started/using-github/github-flow', '_blank');
    });
    document.getElementById('github-link')?.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://github.com/felixop7/mygov-response/blob/main/README.md', '_blank');
    });

    // Download button (dummy, replace with actual download link)
    document.getElementById('download-btn')?.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://github.com/felixop7/mygov-response', '_blank');
    });
});
