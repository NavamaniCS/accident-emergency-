const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/send-alert', (req, res) => {
    const { location, description } = req.body;

    // Process the location to find nearby hospitals and police stations
    // For example, use a geocoding API or spatial database
    // Here’s a dummy function for illustration purposes

    const findNearbyFacilities = (location) => {
        // Dummy function to simulate finding facilities
        return {
            hospitals: ['Hospital A', 'Hospital B'],
            policeStations: ['Police Station X', 'Police Station Y']
        };
    };

    const facilities = findNearbyFacilities(location);

    // Send alerts to facilities (this is a simplified example)
    console.log('Sending alerts to:');
    console.log('Hospitals:', facilities.hospitals);
    console.log('Police Stations:', facilities.policeStations);

    // Simulate sending alerts
    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
