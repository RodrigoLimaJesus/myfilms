const express = require('express');
const rescue = require('express-rescue');
const movieDbService = require('../services/movieDbService');
const axios = require('axios');
const router = express.Router();

router.get(
  '/popular',
  rescue(async (req, res) => {
    const { page, lenguage } = req.headers;
    const baseUrl = req.baseUrl;
    const popular = await movieDbService.getPopular({
      page,
      lenguage,
      baseUrl,
    });

    return res.status(200).json(popular);
  }),
);

router.get(
  '/top_rated',
  rescue(async (req, res) => {
    const { page, lenguage } = req.headers;
    const baseUrl = req.baseUrl;
    const topRated = await movieDbService.getTopRated({
      page,
      lenguage,
      baseUrl,
    });

    return res.status(200).json(topRated);
  }),
);

router.get(
  '/:id',
  rescue(async (req, res) => {
    const { id } = req.params;
    const { lenguage } = req.headers;
    const baseUrl = req.baseUrl;
    const details = await movieDbService.getDetails({ id, baseUrl, lenguage });

    return res.status(200).json(details);
  }),
);

module.exports = router;
