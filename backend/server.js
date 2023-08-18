const jsonServer= require('json-server');

const annualrain=require('./exports/Annual-Rain-All-Years.json');
const slums=require('./exports/bangladesh_slums_total (1).json');
const months=require('./exports/Month-FiveYears.json');
const population=require('./exports/PThreeYears.json');
const map=require("./exports/Map.json")

const server= jsonServer.create();
const router=jsonServer.router({annualrain, slums, months, population, map});
const middleware=jsonServer.defaults();
const port =process.env.PORT || 3001;


server.use(middleware);
server.use(router);

server.listen(port)