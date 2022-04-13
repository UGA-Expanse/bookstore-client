'use strict';

const Path = require('path');
const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (Number.isNaN(port)) {
	return val;
    }

    if (port >= 0) {
	return port;
    }

    return false;
}

var port = normalizePort(process.env.PORT) || 8888;

// Create a server with a host and port
const server = Hapi.server({
//    host: 'localhost',
    port: port
});

// Add the route
/*
server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'hello world';
    }
});
*/
/*
server.route({
	method: 'GET',
	path: '/app/{path*}',
	handler: {
	    directory: {
		path: Path.join(__dirname, '../client/build/'),
		listing: false,
		index: true
	    }
	}
});
*/
// Start the server
async function start() {
    try {
	await server.register(Inert);

	server.route({
	    method: 'GET',
	    path: '/app/{path*}',
	    handler: {
		directory: {
		    path: Path.join(__dirname, '../client/build/'),
		    listing: false,
		    index: true
		}
	    }
	});
	
        await server.start();
	console.log("Hapi server listening on port " + server.info.uri);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
}

start();
