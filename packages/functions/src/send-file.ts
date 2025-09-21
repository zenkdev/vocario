import type { Response } from 'express';
import { parse } from 'path';

import type { File } from './types';

export default function sendFile(res: Response, file: File): Promise<void> {
  const metadata = file.metadata || {};
  const cacheControl = (metadata.cacheControl || 'public, max-age=86400') as string;
  const etag = metadata.etag as string | undefined;

  const { name, ext } = parse(file.name);

  res.status(200).attachment(`${name}${ext}`).contentType(ext).header('cache-control', cacheControl);

  if (etag) {
    res.header('etag', etag);
  }

  return new Promise((resolve, reject) => {
    const stream = file.createReadStream();

    stream.on('end', () => {
      res.end();
      resolve();
    });
    stream.on('error', err => reject(err));

    stream.pipe(res);
  });
}
