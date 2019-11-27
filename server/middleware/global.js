const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

module.exports = middleware => {
  middleware.use(express.json());
  middleware.use(helmet());
  middleware.use(cors());
  middleware.use(morgan('dev'));
};
