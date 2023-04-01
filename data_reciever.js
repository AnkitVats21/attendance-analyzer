const net = require('net');

// Define the host and port of the socket
const HOST = 'localhost';
const PORT = 8000;

// Create a socket object
const server = net.createServer((socket) => {
  console.log(`Connected to ${socket.remoteAddress}:${socket.remotePort}`);

  // Listen for incoming data
  socket.on('data', (data) => {
    // Convert the data to a JavaScript object
    const data_obj = JSON.parse(data.toString('utf-8'));

    // Process the data however you need to
    const camera_id = data_obj.camera_id;
    const student_strength = data_obj.student_strength;
    console.log(`Camera ID: ${camera_id}, Student Strength: ${student_strength}`);
  });

  // Handle socket errors
  socket.on('error', (err) => {
    console.error(`Socket error: ${err.message}`);
  });

  // Handle socket closure
  socket.on('close', () => {
    console.log('Socket closed');
  });
});

// Start the server and listen for incoming connections
server.listen(PORT, HOST, () => {
  console.log(`Server listening on ${HOST}:${PORT}`);
});
