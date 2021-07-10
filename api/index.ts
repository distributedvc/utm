import { utm } from '../src';
import type { VercelRequest, VercelResponse } from '@vercel/node';

module.exports = async (req: VercelRequest, res: VercelResponse): Promise<void> => {
  const query = req.url.replace('/', '');

  if (!query || !query.includes('utm_')) {
    res.statusCode = 400;
    res.end('Bad Request');
  } else {
    const utms = utm(query);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(utms));
  }
};
