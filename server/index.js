'use strict';

const path    = require('path')
const Express = require('express');
const Server  = Express();

Server.use(Express.static(`${__dirname}/../node_modules`));

Server.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

Server.listen(3000);
