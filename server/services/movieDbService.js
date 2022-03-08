const movieDbModel = require('../models/movieDbModel');

function handleUrlName(url) {
  return url.includes('movie') ? 'movie' : 'tv';
}

async function getPopular({ page, lenguage, baseUrl }) {
  const type = handleUrlName(baseUrl);
  const popular = await movieDbModel.getPopular({ page, lenguage, type });

  return popular.results;
}

async function getTopRated({ page, lenguage, baseUrl }) {
  const type = handleUrlName(baseUrl);
  const topRated = await movieDbModel.getTopRated({ page, lenguage, type });

  return topRated.results;
}

async function getDetails({ id, lenguage, baseUrl }) {
  const type = handleUrlName(baseUrl);
  const details = await movieDbModel.getDetails({ id, lenguage, type });

  return details;
}

module.exports = { getPopular, getTopRated, getDetails };
