# Backend

Backend provided by NHost

## Features

- 💄 Linting with Eslint typescript file
- 💄 Prettier included
- 💄 VSCode config
- ✨ Automatic generated client fully typed with `graphql-request`
- ✨ Better code splitting
- ✨ Add custom rule for avoid `GQL_` error

## Setup

### Windows

- Setup wsl2
- Install `nhost-cli` without sudo
- Enable mount `metadata` option ((this)[https://learn.microsoft.com/fr-fr/windows/wsl/wsl-config#automount-options])
- Run `nhost dev` in this folder

## Gotcha !

### Hot-reload doesnt work for my `/functions`

Yeah - NHost doesn't handle very well file change in functions. Only real function file change trigger a hot-reload

## Why use `graphq-request` instead of `nhost.graphql`

NHost Graphql client is not fully typed - and can't be - without generation.
