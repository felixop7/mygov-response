// interactive.js

// API Documentation Viewer Component
class ApiDocViewer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.apiData = {};
        this.currentApi = null;
    }

    async loadApiData() {
        // In a real implementation, this would fetch from actual API documentation files
        this.apiData = {
            weather: {
                title: "Weather API Documentation",
                sections: [
                    {
                        title: "Overview",
                        content: "The Weather API collection in the MyGov Response Hub provides access to weather data for locations across Nepal. This collection integrates with the Nepal Weather API and includes fallback mock data to ensure reliability."
                    },
                    {
                        title: "API Endpoints",
                        content: `
                            <h4>Get Weather by Location</h4>
                            <p>Retrieves current weather information for a specified location in Nepal.</p>
                            <div class="code-block">
                                <div class="code-header">
                                    <span class="method get">GET</span>
                                    <span class="endpoint">/api/?place={location}</span>
                                </div>
                                <div class="code-content">
                                    <h5>Parameters:</h5>
                                    <ul>
                                        <li><code>place</code> (required): The name of the location (e.g., Kathmandu, Pokhara, Bhaktapur)</li>
                                    </ul>
                                    <h5>Example Response:</h5>
                                    <pre>{
  "status": "true",
  "place": "Kathmandu",
  "max": "28",
  "min": "16",
  "rain": "0.0mm"
}</pre>
                                </div>
                            </div>
                            <h4>Get Weather Forecast</h4>
                            <p>Retrieves a multi-day weather forecast for a specified location in Nepal.</p>
                            <div class="code-block">
                                <div class="code-header">
                                    <span class="method get">GET</span>
                                    <span class="endpoint">/mock/weather/forecast/{location}</span>
                                </div>
                                <div class="code-content">
                                    <h5>Parameters:</h5>
                                    <ul>
                                        <li><code>location</code> (required): The name of the location (e.g., Kathmandu, Pokhara, Bhaktapur)</li>
                                    </ul>
                                    <h5>Example Response:</h5>
                                    <pre>{
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
    }
  ]
}</pre>
                                </div>
                            </div>
                        `
                    },
                    {
                        title: "Error Handling",
                        content: `
                            <p>The API returns the following error responses:</p>
                            <ul>
                                <li><strong>404 Not Found</strong>: Location not found or invalid</li>
                                <li><strong>500 Internal Server Error</strong>: Server-side error</li>
                            </ul>
                            <h5>Example Error Response:</h5>
                            <pre>{
  "status": "false",
  "message": "Location not found"
}</pre>
                        `
                    }
                ]
            },
            holiday: {
                title: "Holiday API Documentation",
                sections: [
                    {
                        title: "Overview",
                        content: "The Holiday API collection provides access to holiday and calendar event data for Nepal. This collection integrates with the npEventsAPI and includes support for both AD (Gregorian) and BS (Bikram Sambat) calendar systems."
                    },
                    {
                        title: "API Endpoints",
                        content: `
                            <h4>Get Holiday Information by AD Date</h4>
                            <p>Retrieves holiday and event information for a specified date in the Gregorian calendar.</p>
                            <div class="code-block">
                                <div class="code-header">
                                    <span class="method get">GET</span>
                                    <span class="endpoint">/v2/date/ad/{date}</span>
                                </div>
                                <div class="code-content">
                                    <h5>Parameters:</h5>
                                    <ul>
                                        <li><code>date</code> (required): Date in YYYY-MM-DD format (e.g., 2025-04-17)</li>
                                    </ul>
                                    <h5>Example Response:</h5>
                                    <pre>{
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
}</pre>
                                </div>
                            </div>
                        `
                    }
                ]
            }
            // Additional APIs can be added here
        };
        return this.apiData;
    }

    renderApiSelector() {
        if (!this.container) return;
        const selectorDiv = document.createElement('div');
        selectorDiv.className = 'api-selector';
        const selectorLabel = document.createElement('h3');
        selectorLabel.textContent = 'Select API Documentation:';
        selectorDiv.appendChild(selectorLabel);
        const apiButtons = document.createElement('div');
        apiButtons.className = 'api-buttons';
        for (const apiKey in this.apiData) {
            const button = document.createElement('button');
            button.className = 'api-button';
            button.textContent = this.apiData[apiKey].title.split(' ')[0];
            button.dataset.api = apiKey;
            button.addEventListener('click', () => this.showApiDocs(apiKey));
            apiButtons.appendChild(button);
        }
        selectorDiv.appendChild(apiButtons);
        this.container.appendChild(selectorDiv);
        // Create content container
        const contentDiv = document.createElement('div');
        contentDiv.id = 'api-content';
        contentDiv.className = 'api-content';
        this.container.appendChild(contentDiv);
    }

    showApiDocs(apiKey) {
        if (!this.apiData[apiKey]) return;
        // Update active button
        document.querySelectorAll('.api-button').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.api === apiKey) {
                btn.classList.add('active');
            }
        });
        this.currentApi = apiKey;
        const contentDiv = document.getElementById('api-content');
        const apiData = this.apiData[apiKey];
        let html = `
            <div class="api-header">
                <h2>${apiData.title}</h2>
            </div>
            <div class="api-toc">
                <h3>Contents</h3>
                <ul>
        `;
        // Generate table of contents
        apiData.sections.forEach((section, index) => {
            html += `<li><a href="#section-${index}">${section.title}</a></li>`;
        });
        html += `
                </ul>
            </div>
            <div class="api-sections">
        `;
        // Generate sections
        apiData.sections.forEach((section, index) => {
            html += `
                <div class="api-section" id="section-${index}">
                    <h3>${section.title}</h3>
                    <div class="section-content">
                        ${section.content}
                    </div>
                </div>
            `;
        });
        html += `</div>`;
        contentDiv.innerHTML = html;
        // Scroll to top of content
        contentDiv.scrollTop = 0;
    }

    init() {
        this.loadApiData().then(() => {
            this.renderApiSelector();
            // Show the first API by default
            const firstApi = Object.keys(this.apiData)[0];
            if (firstApi) {
                this.showApiDocs(firstApi);
            }
        });
    }
}

// Flow Visualizer Component
class FlowVisualizer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.flows = {
            weather: {
                name: "Weather Alert & Holiday Planning Flow",
                description: "This flow combines weather forecasts with holiday information and potential power outage alerts to provide a comprehensive daily planning tool.",
                steps: [
                    {
                        name: "Get Weather Data",
                        api: "Weather API",
                        endpoint: "GET /api/?place={location}",
                        description: "Retrieves current weather information for the specified location."
                    },
                    {
                        name: "Check Holiday Calendar",
                        api: "Holiday API",
                        endpoint: "GET /v2/date/ad/{date}",
                        description: "Checks if the current date is a holiday or has special events."
                    },
                    {
                        name: "Check Power Outage Schedule",
                        api: "Utility API",
                        endpoint: "GET /utility/electricity/powercuts",
                        description: "Checks if there are any scheduled power outages for the location."
                    },
                    {
                        name: "Generate Daily Report",
                        api: "Internal Processing",
                        endpoint: "N/A",
                        description: "Combines all data into a comprehensive daily planning report."
                    }
                ]
            },
            emergency: {
                name: "Emergency Response Flow",
                description: "This flow integrates emergency alerts with transportation routing and service status information to provide critical guidance during emergencies.",
                steps: [
                    {
                        name: "Get Emergency Alerts",
                        api: "Emergency API",
                        endpoint: "GET /emergency/alerts",
                        description: "Retrieves active emergency alerts for the specified district."
                    },
                    {
                        name: "Get Safety Guidelines",
                        api: "Emergency API",
                        endpoint: "GET /emergency/guidelines",
                        description: "Retrieves safety guidelines for the specific type of emergency."
                    },
                    {
                        name: "Check Weather Conditions",
                        api: "Weather API",
                        endpoint: "GET /api/?place={location}",
                        description: "Checks current weather conditions that might affect emergency response."
                    },
                    {
                        name: "Calculate Evacuation Routes",
                        api: "Transportation API",
                        endpoint: "GET /api/v1/directions",
                        description: "Determines optimal evacuation routes based on emergency type and location."
                    },
                    {
                        name: "Provide Emergency Contacts",
                        api: "Emergency API",
                        endpoint: "GET /emergency/contacts",
                        description: "Retrieves relevant emergency contact information."
                    }
                ]
            },
            financial: {
                name: "Financial Planning Flow",
                description: "This flow combines currency exchange rates with utility service information to help users make informed financial decisions.",
                steps: [
                    {
                        name: "Get Currency Exchange Rates",
                        api: "Financial API",
                        endpoint: "GET /finance/forex/latest",
                        description: "Retrieves the latest currency exchange rates."
                    },
                    {
                        name: "Get Stock Market Data",
                        api: "Financial API",
                        endpoint: "GET /get_stock_chart",
                        description: "Retrieves stock market data for specified symbols."
                    },
                    {
                        name: "Check Utility Service Status",
                        api: "Utility API",
                        endpoint: "GET /utility/electricity/status",
                        description: "Checks the current status of utility services."
                    },
                    {
                        name: "Get Power Outage Schedule",
                        api: "Utility API",
                        endpoint: "GET /utility/electricity/powercuts",
                        description: "Retrieves scheduled power outages that might affect businesses."
                    },
                    {
                        name: "Generate Financial Impact Analysis",
                        api: "Internal Processing",
                        endpoint: "N/A",
                        description: "Analyzes the financial impact of current conditions and generates recommendations."
                    }
                ]
            }
        };
    }

    renderFlowSelector() {
        if (!this.container) return;
        const selectorDiv = document.createElement('div');
        selectorDiv.className = 'flow-selector';
        const selectorLabel = document.createElement('h3');
        selectorLabel.textContent = 'Select Flow to Visualize:';
        selectorDiv.appendChild(selectorLabel);
        const flowButtons = document.createElement('div');
        flowButtons.className = 'flow-selector-buttons';
        for (const flowKey in this.flows) {
            const button = document.createElement('button');
            button.className = 'flow-selector-button';
            button.textContent = this.flows[flowKey].name.split(' ')[0] + ' Flow';
            button.dataset.flow = flowKey;
            button.addEventListener('click', () => this.visualizeFlow(flowKey));
            flowButtons.appendChild(button);
        }
        selectorDiv.appendChild(flowButtons);
        this.container.appendChild(selectorDiv);
        // Create visualization container
        const vizDiv = document.createElement('div');
        vizDiv.id = 'flow-viz-content';
        vizDiv.className = 'flow-viz-content';
        this.container.appendChild(vizDiv);
    }

    visualizeFlow(flowKey) {
        if (!this.flows[flowKey]) return;
        // Update active button
        document.querySelectorAll('.flow-selector-button').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.flow === flowKey) {
                btn.classList.add('active');
            }
        });
        const flow = this.flows[flowKey];
        const vizDiv = document.getElementById('flow-viz-content');
        let html = `
            <div class="flow-header">
                <h2>${flow.name}</h2>
            </div>
            <div class="flow-description">
                <p>${flow.description}</p>
            </div>
            <div class="flow-steps">
        `;
        flow.steps.forEach((step, idx) => {
            html += `
                <div class="flow-step-block">
                    <div class="flow-step-title"><strong>Step ${idx + 1}: ${step.name}</strong></div>
                    <div class="flow-step-api"><span class="api-label">${step.api}</span> <span class="endpoint-label">${step.endpoint}</span></div>
                    <div class="flow-step-desc">${step.description}</div>
                </div>
                ${idx < flow.steps.length - 1 ? '<div class="flow-arrow"><i class="fas fa-arrow-down"></i></div>' : ''}
            `;
        });
        html += `</div>`;
        vizDiv.innerHTML = html;
        vizDiv.scrollTop = 0;
    }

    init() {
        this.renderFlowSelector();
        // Show the first flow by default
        const firstFlow = Object.keys(this.flows)[0];
        if (firstFlow) {
            this.visualizeFlow(firstFlow);
        }
    }
}

// Initialize Interactive Section on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Insert interactive section if not present
    let interactiveSection = document.getElementById('interactive');
    if (!interactiveSection) {
        interactiveSection = document.createElement('section');
        interactiveSection.id = 'interactive';
        interactiveSection.className = 'interactive';
        document.body.insertBefore(interactiveSection, document.getElementById('documentation'));
    }
    interactiveSection.innerHTML = `
        <div class="container">
            <div class="section-header">
                <h2>Interactive Documentation & Flows</h2>
                <div class="underline"></div>
            </div>
            <div class="interactive-flex">
                <div class="interactive-left" id="api-doc-viewer"></div>
                <div class="interactive-right" id="flow-visualizer"></div>
            </div>
        </div>
    `;
    // Initialize components
    const apiDocViewer = new ApiDocViewer('api-doc-viewer');
    apiDocViewer.init();
    const flowVisualizer = new FlowVisualizer('flow-visualizer');
    flowVisualizer.init();
});
