const express = require('express');
const tvService = require('../services/tvService');
const axios = require('axios');
const moviesController = express.Router();

moviesController.get('/popular', async (req, res) => {
  const { page, lenguage } = req.headers;
  const popular = await tvService.getPopular({ page, lenguage });
  return res.status(200).json(popular);
});

moviesController.get('/top_rated', async (req, res) => {
  const { page, lenguage } = req.headers;
  const topRated = await tvService.getTopRated({ page, lenguage });
  return res.status(200).json(topRated);
});

module.exports = moviesController;
