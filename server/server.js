const path = require('path');

const restify = require('restify');

let server = restify.createServer();

server.get('/static/*', restify.plugins.serveStatic({
    directory: path.join(__dirname, '../')
}));

server.listen(8000, () => {
        console.log(`Server listening on ${server.name}, ${server.url}`);
});


