const MovieDbModel = require('../models/MovieDbModel');

function handleUrlName(url) {
  return url.includes('movie') ? 'movie' : 'tv';
}

async function getPopular(req) {
  const { page, lenguage } = req.headers;
  const type = handleUrlName(req.baseUrl);
  const popular = await MovieDbModel.getPopular({ page, lenguage, type });
  return popular.results;
}

async function getTopRated(req) {
  const { page, lenguage } = req.headers;
  const type = handleUrlName(req.baseUrl);
  const topRated = await MovieDbModel.getTopRated({ page, lenguage, type });
  return topRated.results;
}

module.exports = { getPopular, getTopRated };
