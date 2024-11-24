
const express = require('express');
const path = require('path');
const fs = require('fs');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const exec = require('child_process').exec;

// Initialize Express app
const app = express();

// Use morgan for logging
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json()); // To parse incoming JSON payload from the webhook

// Serve the React build files
app.use(express.static('/home/ubuntu/node_on_EC2/client/build'));

// Define the port for HTTP (usually port 80 for unencrypted communication)
const PORT = process.env.PORT || 80;

// Serve React app's index.html for all routes
app.get('*', (req, res) => {
    res.sendFile(path.join('/home/ubuntu/node_on_EC2/client/build', 'index.html'));
});

// Webhook listener for GitHub (to trigger deployment)
app.post('/deploy', (req, res) => {
    console.log('Received webhook from GitHub');

    // Optional: Verify the webhook signature (security measure)
    // You can use GitHub's x-hub-signature for this (not covered here, but highly recommended for production)
    
    // Run the deployment script when a webhook is received
    exec('bash /home/ubuntu/deploy.sh', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            res.status(500).send('Deployment failed');
            return;
        }
        console.log(stdout);
        res.status(200).send('Deployment started');
    });
});

// Create an HTTP server (no HTTPS or SSL certificates needed)
http.createServer(app).listen(PORT, () => {
    console.log(`HTTP Server running on http://localhost:${PORT}`);
});
