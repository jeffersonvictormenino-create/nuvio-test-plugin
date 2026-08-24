function getStreams(tmdbId, mediaType, season, episode) {
  console.log("[Nuvio Teste] Provider executado");

  return Promise.resolve([
    {
      name: "Nuvio Teste",
      title: "Título Fictício",
      url: "https://example.com/teste.mp4",
      quality: "Teste"
    }
  ]);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { getStreams };
} else {
  global.getStreams = getStreams;
}
