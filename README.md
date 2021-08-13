![preview](https://user-images.githubusercontent.com/2362138/129308953-61543e84-31e7-4f8d-82d9-d6a28c4b4fd1.png)

[![Build Status](https://github.com/distributedvc/utm/workflows/CI/badge.svg)](https://github.com/distributedvc/utm/actions?query=workflow%3ACI+branch%3Amain)
[![npm version][npm-version-src]][npm-version-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-1a2b34.svg?style=flat-square)](https://prettier.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg?style=flat-square)](https://opensource.org/licenses/MIT)

> Small library to parse utm parameters.

### Install

With yarn:

```bash
yarn add @distributed/utm
```

With npm:

```bash
npm install @distributed/utm
```

## Usage

```ts
import { utm } from '@distributed/utm';

// location.search => ?utm_source=google&utm_campaign=campaignName&utm_medium=medium&utm_content=content&utm_term=term
const utms = utm(location.search);

console.table(utms);

/* =>
{
  "utm_source": "google",
  "utm_campaign": "campaignName",
  "utm_medium": "medium",
  "utm_content": "content",
  "utm_term": "term"
}
/*
```

### Try it live

```bash
curl "https://utm.distributed.sh/?utm_source=google&utm_campaign=campaignName&utm_medium=medium&utm_content=content&utm_term=term"

# =>
# {
#   "utm_source": "google",
#   "utm_campaign": "campaignName",
#   "utm_medium": "medium",
#   "utm_content": "content",
#   "utm_term": "term"
# }
```

## Development

1. Install dependencies using `yarn install` or `npm install`
2. Start development server using `yarn watch`

## 📑 License

[MIT License](./LICENSE)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/dt/@distributed/utm.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@distributed/utm
[npm-downloads-src]: https://img.shields.io/npm/v/@distributed/utm/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@distributed/utm
[david-dm-src]: https://david-dm.org/distributedvc/utm/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/distributedvc/utm
