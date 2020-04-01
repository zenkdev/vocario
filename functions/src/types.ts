import { Readable, Writable } from 'stream';

export interface CreateReadStreamOptions {
  userProject?: string;
  validation?: 'md5' | 'crc32c' | false | true;
  start?: number;
  end?: number;
  decompress?: boolean;
}

export declare type Metadata = any;

export declare type PredefinedAcl =
  | 'authenticatedRead'
  | 'bucketOwnerFullControl'
  | 'bucketOwnerRead'
  | 'private'
  | 'projectPrivate'
  | 'publicRead';

export interface CreateResumableUploadOptions {
  configPath?: string;
  metadata?: Metadata;
  origin?: string;
  offset?: number;
  predefinedAcl?: PredefinedAcl;
  private?: boolean;
  public?: boolean;
  uri?: string;
  userProject?: string;
}

export interface CreateWriteStreamOptions extends CreateResumableUploadOptions {
  contentType?: string;
  gzip?: string | boolean;
  resumable?: boolean;
  validation?: string | boolean;
}

export type File = {
  name: string;
  metadata: any;
  createReadStream(options?: CreateReadStreamOptions): Readable;
  createWriteStream(options?: CreateWriteStreamOptions): Writable;
};
