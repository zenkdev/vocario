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
  res.status(200);
  res.contentType('mp3');
  res.attachment(getFilename(file.name));
  res.header('x-send-file', 'true');

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
