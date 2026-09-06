const express = require('express');
const path = require('path');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;
const startTime = Date.now();

app.use(express.static(path.join(__dirname, 'public')));

// Simple API the frontend polls to confirm the container is alive
app.get('/api/status', (req, res) => {
  res.json({
    status: 'live',
    hostname: os.hostname(),
    uptimeSeconds: Math.floor((Date.now() - startTime) / 1000),
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Container Live app running on port ${PORT}`);
});
