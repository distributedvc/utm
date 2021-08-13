import { utm } from '../src';
import type { VercelRequest, VercelResponse } from '@vercel/node';

module.exports = async (req: VercelRequest, res: VercelResponse): Promise<void> => {
  const query = req.url.replace('/', '');

  const utms = utm(query);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(utms));
};
