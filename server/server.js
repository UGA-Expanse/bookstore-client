'use strict';

const Path = require('path');
const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');

var port = process.env.PORT || '4000';

// Create a server with a host and port
const server = Hapi.server({
//    host: 'localhost',
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
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
}

start();
