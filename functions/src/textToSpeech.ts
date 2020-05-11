import { TextToSpeechClient } from '@google-cloud/text-to-speech';

type AudioEncoding = 'LINEAR16' | 'MP3' | 'OGG_OPUS';

// Creates a client
const client = new TextToSpeechClient();

export function audioEncodingFromExt(ext: string): AudioEncoding {
  switch (ext.toLowerCase()) {
    case '.mp3':
      return 'MP3';
    case '.wav':
      return 'LINEAR16';
    case '.ogg':
      return 'OGG_OPUS';
    default:
      throw new Error(`Unsupported extension: ${ext}`);
  }
}

export default async function textToSpeech(text: string, audioEncoding: AudioEncoding): Promise<Uint8Array | string | null | undefined> {
  // Construct the request
  const request = {
    input: { text },
    // Select the language and SSML voice gender (optional)
    voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' as const },
    // select the type of audio encoding
    audioConfig: { audioEncoding },
  };

  // Performs the text-to-speech request
  const [response] = await client.synthesizeSpeech(request);

  return response.audioContent;
}
