const tvModel = require('../models/tvModel');

async function getPopular({ page, lenguage }) {
  const popular = await tvModel.getPopular({ page, lenguage });
  return popular.results;
}

async function getTopRated({ page, lenguage }) {
  const topRated = await tvModel.getTopRated({ page, lenguage });
  return topRated.results;
}

module.exports = { getPopular, getTopRated };
