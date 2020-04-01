/* eslint-disable import/no-extraneous-dependencies */
import { Response } from 'express';
import { File } from './types';

function getFilename(path: string): string {
  const start = path.lastIndexOf('/');
  if (start !== -1) {
    return path.substring(start + 1);
  }
  return path;
}

export default function sendFile(res: Response, file: File): Promise<void> {
  const metadata = file.metadata || {};
  const contentType = metadata.contentType || 'mp3';
  const cacheControl = metadata.cacheControl || 'public, max-age=86400';
  const { etag } = metadata;

  res
    .status(200)
    .attachment(getFilename(file.name))
    .contentType(contentType)
    .header('cache-control', cacheControl)
    .header('x-send-file', 'true');

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
