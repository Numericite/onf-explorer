import * as migration_20250731_130012_init from './20250731_130012_init';
import * as migration_20250731_143259_add_recursive_to_tags from './20250731_143259_add_recursive_to_tags';

export const migrations = [
  {
    up: migration_20250731_130012_init.up,
    down: migration_20250731_130012_init.down,
    name: '20250731_130012_init',
  },
  {
    up: migration_20250731_143259_add_recursive_to_tags.up,
    down: migration_20250731_143259_add_recursive_to_tags.down,
    name: '20250731_143259_add_recursive_to_tags'
  },
];
