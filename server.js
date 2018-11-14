const hapi = require(`hapi`);

const server = hapi.Server({
    host: `localhost`,
    port: 3000
});
const lista =[1, 2, 3];
Server.route([
    {
    method: `GET`,
    path: `/lista`,
    handler: (req, h)=>{
        return {data: lista};
    }
},
{
    method: `POST`,
    path: `/lista`,
    handler: (req, h)=>{
        return {data: lista};

}
},

{
    method: `PUT`,
    path: `/lista{index}`,
    handler: (req, h)=>{
        lista[req.param.index] = req.payload.data;
        return {data: lista};

}
},

{
    method: `DELETE`,
    path: `/lista{index}`,
    handler: (req, h)=>{
        lista[req.param.index] = req.payload.data;
        return {data: lista};

}
},

async function start() {
    try {
        await server.start();
    } catch (error) {
        console.log(err);
        process.exit (1);
    }
    console.log(`server running at:`, server.info.uri);
]};
