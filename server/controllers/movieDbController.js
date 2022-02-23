const express = require('express');
const rescue = require('express-rescue');
const movieDbService = require('../services/movieDbService');
const axios = require('axios');
const moviesController = express.Router();

moviesController.get(
  '/popular',
  rescue(async (req, res) => {
    const popular = await movieDbService.getPopular(req);
    return res.status(200).json(popular);
  }),
);

moviesController.get(
  '/top_rated',
  rescue(async (req, res) => {
    const topRated = await movieDbService.getTopRated(req);
    return res.status(200).json(topRated);
  }),
);

module.exports = moviesController;
