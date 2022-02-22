const moviesModel = require('../models/moviesModel');

async function getPopular({ page, lenguage }) {
  const popular = await moviesModel.getPopular({ page, lenguage });
  return popular.results;
}

async function getTopRated({ page, lenguage }) {
  const topRated = await moviesModel.getTopRated({ page, lenguage });
  return topRated.results;
}

module.exports = { getPopular, getTopRated };
