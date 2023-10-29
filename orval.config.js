const path = require('path');

const input = path.join(__dirname, 'server', 'openapi', 'data-api.json');
const output = path.resolve(__dirname, 'client', 'src', 'sdk');

module.exports = {
  sdk: {
    output: {
      clean: true,
      prettier: true,
      mode: 'tags-split',
      target: path.join(output, 'api'),
      schemas: path.join(output, 'schemas'),
      client: 'swr',
      mock: true,
      override: {
        mutator: {
          path: path.join(__dirname, 'client', 'src', 'lib', 'fetcher.ts'),
          name: 'fetcher',
        },
      },
    },
    input: {
      target: input,
    },
  },
};
