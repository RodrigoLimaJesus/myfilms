const moviesModel = require('../models/moviesModel');

async function getPopular(page) {
  const popular = await moviesModel.getPopular(page);
  return popular.results;
}

module.exports = { getPopular };
