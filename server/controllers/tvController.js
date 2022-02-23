const express = require('express');
const rescue = require('express-rescue');
const tvService = require('../services/tvService');
const axios = require('axios');
const moviesController = express.Router();

moviesController.get(
  '/popular',
  rescue(async (req, res) => {
    const { page, lenguage } = req.headers;
    const popular = await tvService.getPopular({ page, lenguage });
    return res.status(200).json(popular);
  }),
);

moviesController.get(
  '/top_rated',
  rescue(async (req, res) => {
    const { page, lenguage } = req.headers;
    const topRated = await tvService.getTopRated({ page, lenguage });
    return res.status(200).json(topRated);
  }),
);

module.exports = moviesController;
