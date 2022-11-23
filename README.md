## Snapshot Labs configs

Set of eslint/prettier configs used in Snapshot repos.

- [`@snapshot-labs/eslint-config`](packages/eslint-config)
- [`@snapshot-labs/eslint-config-vue`](packages/eslint-config-vue)
- [`@snapshot-labs/prettier-config`](packages/prettier-config)

## Releasing new versions

Run `yarn release` on master and pick new version of package. Once new version is tagged and pushed to remote
it will be published to npm via Github Actions.
