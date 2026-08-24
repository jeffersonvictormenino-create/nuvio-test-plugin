// ================================
// NUVIO TESTE — FONTES PERSONALIZÁVEIS
// ================================

var fontes = [
  {
    nome: "MegaFilmes",
    url: "https://megafilmeseserieshd.xyz/.mp4",
    qualidade: "1080p"
  },
  {
    nome: "Pinguim",
    url: "https://pinguimcinema.space/.mp4",
    qualidade: "720p"
  }
];

function getStreams(tmdbId, mediaType, season, episode) {
  var streams = [];

  fontes.forEach(function (fonte) {
    if (fonte.url && fonte.url.indexOf("https://SEU-DOMINIO-AQUI") === -1) {
      streams.push({
        name: fonte.nome,
        title: "Fonte personalizada",
        url: fonte.url,
        quality: fonte.qualidade
      });
    }
  });

  return Promise.resolve(streams);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getStreams: getStreams
  };
} else {
  global.getStreams = getStreams;
}
