const express = require('express');
const moviesService = require('../services/moviesService');
const axios = require('axios');
const moviesController = express.Router();

moviesController.get('/popular', async (req, res) => {
  const { page } = req.headers;
  const popular = await moviesService.getPopular(page);
  return res.status(200).json(popular);
});

module.exports = moviesController;
