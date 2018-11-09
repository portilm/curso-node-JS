const http = require(`http`);

http.reateServer(function(reg, res){
res.writeHead(200, {`Content-Type`: `text/html`});
res.end(`Hola mundo`);
});

server.listen(3000);
