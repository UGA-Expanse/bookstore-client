'use strict';

const Hapi = require('@hapi/hapi');

var port = process.env.PORT || '4000';

// Create a server with a host and port
const server = Hapi.server({
    host: 'localhost',
    port: port
});

// Add the route
server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'hello world';
    }
});

// Start the server
async function start() {
    try {
        await server.start();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
}

start();
