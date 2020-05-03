export default function fileToDataUrl(file: Blob | undefined, callback: (result: string | undefined) => void) {
  if (!file) {
    callback(undefined);
  } else {
    const reader = new FileReader();
    reader.onloadend = () => {
      callback(reader.result as string);
    };
    reader.readAsDataURL(file);
  }
}
