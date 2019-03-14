const fastify = require('fastify')({
    logger: true
});

fastify.get('/static', (req, res) => {
    res.send({message: "Hello World Fastify!"});
});

fastify.listen(8000, (err, addr) => {
    if(err)
        throw err;
        fastify.log.info(`Server listening on ${addr}`);
});


