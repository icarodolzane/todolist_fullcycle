const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const routes = express();
routes.use(cors({
  origin: '*'
}));

module.exports = routes;
