const fastify = require('fastify')({

});

const port=process.env.PORT || 9292;


fastify.route({
    method: 'GET',
    url: '/',
    handler: (req, res) => {
        console.log(req.socket.remoteAddress);
        console.log(req.ip)
        console.log(req.ips)
        console.log(req.hostname)
        console.log(req.protocol)
        res.send({
            message: 'Hello World'
        })
    }
})

const app = async () => {
    await fastify.listen({
        port: port,
    });
    console.log(`Server is listening on port ${port}`);
}





app();
