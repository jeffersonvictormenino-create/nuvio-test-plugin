function getStreams(tmdbId, mediaType, season, episode) {
  console.log("[Nuvio Teste]");
  console.log("TMDB:", tmdbId);
  console.log("Tipo:", mediaType);
  console.log("Temporada:", season);
  console.log("Episódio:", episode);

  return Promise.resolve([]);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { getStreams };
} else {
  global.getStreams = getStreams;
}
