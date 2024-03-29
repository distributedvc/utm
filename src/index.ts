import qs from 'query-string';

type UtmParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  utm_name?: string;
  [key: string]: string | string[] | undefined | null | boolean | number;
};

export function utm(
  query: string = typeof window !== 'undefined' ? window?.location?.search : ''
): UtmParams {
  const utms = qs.pick(query, (name) => name.startsWith('utm_'));
  return qs.parse(utms) as UtmParams;
}
