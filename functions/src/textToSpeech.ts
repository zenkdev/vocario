import { TextToSpeechClient } from '@google-cloud/text-to-speech';

// Creates a client
const client = new TextToSpeechClient();

export default async function textToSpeech(text: string): Promise<Uint8Array | string | null | undefined> {
  // Construct the request
  const request = {
    input: { text },
    // Select the language and SSML voice gender (optional)
    voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' as const },
    // select the type of audio encoding
    audioConfig: { audioEncoding: 'MP3' as const },
  };

  // Performs the text-to-speech request
  const [response] = await client.synthesizeSpeech(request);

  return response.audioContent;
}
