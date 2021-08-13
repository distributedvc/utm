---
title: Try it live
description: 'Small library to parse utm parameters.'
position: 2
category: 'Guide'
---

### From the console

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

### Using fetch

```ts
// location.search => ?utm_source=google&utm_campaign=campaignName&utm_medium=medium&utm_content=content&utm_term=term
const utms = await fetch(`https://utm.distributed.sh/${location.search}`).then(res => res.json());

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
