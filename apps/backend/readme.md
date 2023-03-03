# Backend

Backend provided by NHost

## Script

## Setup

### Windows

- Setup wsl2
- Install `nhost-cli` without sudo
- Enable mount `metadata` option ((this)[https://learn.microsoft.com/fr-fr/windows/wsl/wsl-config#automount-options])

## Gotcha !

### Hot-reload doesnt work for my `/functions`

Yeah - NHost doesn't handle very well file change in functions.

- `/functions/_{filename}` change is not hotreload
- `/src/${filename}` is not watched and we cant configure what folder is watch

## Why use `graphq-request` instead of `nhost.graphql`

NHost Graphql client is not fully typed - and can't be - without generation.
