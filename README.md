# Nuvio Test Plugin

Repositório experimental de plugins JavaScript para o Nuvio.

## Estrutura

- `manifest.json`: metadados do repositório e dos providers.
- `providers/`: código JavaScript dos providers.
- `badges/`: definições JSON de badges para uso separado.

## Provider: Nuvio Teste

| Propriedade | Declaração |
|---|---|
| ID | `teste` |
| Tipos de conteúdo | Filmes (`movie`) e séries (`tv`) |
| Formato de mídia declarado | MP4 (`.mp4`) |
| Arquivo | `providers/teste.js` |
| Estado | Experimental |

**Limitação atual:** o provider é uma demonstração com fontes estáticas. Ele não pesquisa o TMDB ID, título, temporada ou episódio recebido; por isso, os links retornados não devem ser interpretados como resultados específicos do conteúdo solicitado.

## Dados de stream aceitos pelo runtime Nuvio

O runtime do Nuvio reconhece os seguintes campos em cada resultado, quando aplicáveis:

| Campo | Uso |
|---|---|
| `name` | Nome da fonte ou do provider |
| `title` | Título/descrição do stream |
| `url` | Endereço do stream |
| `quality` | Qualidade informada, por exemplo 720p ou 1080p |
| `size` | Tamanho informado do arquivo |
| `language` | Idioma do áudio/conteúdo |
| `provider` | Identificação do provedor da fonte |
| `type` | Tipo de stream, quando aplicável |
| `seeders`, `peers` | Dados de disponibilidade P2P |
| `infoHash` | Identificador de torrent, quando aplicável |
| `headers` | Cabeçalhos HTTP necessários para acessar a URL |
| `subtitles` | Legendas associadas ao stream |
| `audioDelayMs`, `audioDelayLanguage` | Ajuste de sincronização de áudio |

Inclua esses campos somente quando a fonte fornecer valores reais. Campos opcionais ausentes são preferíveis a metadados inventados.

## Plataformas e compatibilidade

A execução de plugins JavaScript depende de o aplicativo Nuvio incluir o runtime de plugins no dispositivo. O manifesto deste projeto não comprova, por si só, compatibilidade com Android TV, Android móvel, iOS, Samsung ou LG.

A propriedade `supportedPlatforms` existe no modelo do manifesto, mas não é propagada para o modelo de scraper instalado no fluxo de instalação consultado. Por isso, ela não é preenchida com plataformas não verificadas.

## Formatos de mídia

O provider atual declara apenas MP4 porque seus exemplos usam URLs terminadas em `.mp4`. MKV, WebM, HLS (`.m3u8`) e DASH (`.mpd`) não são declarados como suportados sem fontes reais e testes de reprodução.

## Manutenção

- Mantenha cada scraper do manifesto vinculado a um arquivo existente.
- Atualize a versão quando houver uma mudança funcional.
- Declare apenas tipos, idiomas e formatos realmente fornecidos.
- Não adicione plataformas sem confirmar que o aplicativo e o runtime as suportam.
- Teste os links e a reprodução antes de considerar um provider pronto para uso.

Este é um projeto experimental independente, não uma distribuição oficial do Nuvio.
