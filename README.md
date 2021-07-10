<h1 align="center">
  @distributed/utm
</h1>

<p align="center">
  <a href="https://prettier.io">
    <img src="https://img.shields.io/badge/code_style-prettier-0a0a0a.svg?style=flat-square" alt="Code Style" />
  </a>

  <a href="https://npmjs.com/package/@distributed/utm">
    <img src="https://img.shields.io/npm/v/@distributed/utm/latest.svg?style=flat-square" alt="npm version" />
  </a>

  <br />

  <a href="https://npmjs.com/package/@distributed/utm">
    <img src="https://img.shields.io/npm/dt/@distributed/utm.svg?style=flat-square" alt="npm downloads" />
  </a>

  <a href="https://packagephobia.now.sh/result?p=@distributed/utm">
    <img src="https://flat.badgen.net/packagephobia/install/@distributed/utm" alt="Package Phobia" />
  </a>

  <a href="https://bundlephobia.com/result?p=@distributed/utm">
    <img src="https://flat.badgen.net/bundlephobia/minzip/@distributed/utm" alt="Bundle Phobia" />
  </a>

</p>

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
