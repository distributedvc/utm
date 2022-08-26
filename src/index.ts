import { parse, pick } from 'query-string';

type UtmParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_term?: string;
  utm_content?: string;
  utm_name?: string;
  [key: string]: string | string[] | undefined | null | boolean | number;
};

export function utm(query: string = window?.location?.search): UtmParams {
  const utms = pick(query, (name) => name.startsWith('utm_'));
  return parse(utms) as UtmParams;
}
