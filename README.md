# Nuvio Test Plugin

Repositório experimental de plugins JavaScript para o Nuvio.

## Estrutura

- `manifest.json`: metadados do repositório e lista de providers.
- `providers/`: código-fonte dos providers.
- `badges/`: conjunto de badges em JSON para uso separado.

## Provider cadastrado

O manifesto registra o provider `teste`, declarado para filmes e séries.

## Manutenção

- Mantenha cada entrada de `scrapers` vinculada a um arquivo existente em `providers/`.
- Atualize a versão do provider quando houver uma alteração funcional.
- Informe idiomas e formatos apenas quando o código realmente fornecer esses dados.
- Este é um projeto experimental e não é uma distribuição oficial do Nuvio.
