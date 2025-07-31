import * as migration_20250731_130012_init from './20250731_130012_init';

export const migrations = [
  {
    up: migration_20250731_130012_init.up,
    down: migration_20250731_130012_init.down,
    name: '20250731_130012_init'
  },
];
