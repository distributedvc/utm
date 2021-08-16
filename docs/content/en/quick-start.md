---
title: Quick start
description: 'Small library to parse utm parameters.'
position: 1
category: 'Guide'
---

## Installation

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add @distributed/utm
```

  </code-block>
  <code-block label="NPM">

```bash
npm install @distributed/utm
```

  </code-block>
</code-group>

## Usage

### Without any parameter

Given the existing url location: `https://example.com/?utm_source=google&utm_campaign=campaignName&utm_medium=medium&utm_content=content&utm_term=term`

```ts
import { utm } from '@distributed/utm';

const utms = utm();

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

### With parameter

Given the existing url location: `https://example.com/?utm_source=google&utm_campaign=campaignName&utm_medium=medium&utm_content=content&utm_term=term`

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
