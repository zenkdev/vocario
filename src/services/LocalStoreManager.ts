import { jsonTryParse } from '../utils';

const NEXT_WORD_DATA_KEY_PREFIX = 'lexion:nextWord:';
export const SIMPLE_MODE_DATA_KEY = 'lexion:simpleMode';
export const FONT_SIZE_DATA_KEY = 'lexion:fontSize';
export const DARK_THEME_DATA_KEY = 'lexion:darkTheme';

/**
 * Provides a wrapper for accessing the web storage API and synchronizing session storage across tabs/windows.
 */
export class LocalStoreManager {
  private reservedKeys: string[] = [
    'sync_keys',
    'addToSyncKeys',
    'removeFromSyncKeys',
    'getSessionStorage',
    'setSessionStorage',
    'addToSessionStorage',
    'removeFromSessionStorage',
    'clearAllSessionsStorage',
  ];

  public clearAllStorage() {
    this.clearSessionStorage();
    this.clearLocalStorage();
  }

  public clearSessionStorage() {
    sessionStorage.clear();
  }

  public clearLocalStorage() {
    localStorage.clear();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public saveSessionData(key: string, data: any) {
    this.testForInvalidKeys(key);

    localStorage.removeItem(key);
    this.sessionStorageSetItem(key, data);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public savePermanentData(key: string, data: any) {
    this.testForInvalidKeys(key);

    sessionStorage.removeItem(key);
    this.localStorageSetItem(key, data);
  }

  public moveDataToSessionStorage(key: string) {
    this.testForInvalidKeys(key);

    const data = this.getData(key);

    if (data == null) {
      return;
    }

    this.saveSessionData(data, key);
  }

  public moveDataToPermanentStorage(key: string) {
    this.testForInvalidKeys(key);

    const data = this.getData(key);

    if (data == null) {
      return;
    }

    this.savePermanentData(data, key);
  }

  public exists(key: string) {
    let data = sessionStorage.getItem(key);

    if (data == null) {
      data = localStorage.getItem(key);
    }

    return data != null;
  }

  public getData(key: string) {
    this.testForInvalidKeys(key);

    let data = this.sessionStorageGetItem(key);

    if (data == null) {
      data = this.localStorageGetItem(key);
    }

    return data;
  }

  public getDataObject<T>(key: string, isDateType = false): T | null {
    let data = this.getData(key);

    if (data != null) {
      if (isDateType) {
        data = new Date(data);
      }
      return data as T;
    }
    return null;
  }

  public deleteData(key: string) {
    this.testForInvalidKeys(key);

    sessionStorage.removeItem(key);
    localStorage.removeItem(key);
  }

  private testForInvalidKeys(key: string) {
    if (!key) {
      throw new Error('key cannot be empty');
    }

    if (this.reservedKeys.some(x => x === key)) {
      throw new Error(`The storage key "${key}" is reserved and cannot be used. Please use a different key`);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private localStorageSetItem(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private sessionStorageSetItem(key: string, data: any) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  private localStorageGetItem(key: string) {
    return jsonTryParse(localStorage.getItem(key));
  }

  private sessionStorageGetItem(key: string) {
    return jsonTryParse(sessionStorage.getItem(key));
  }
}

const localStoreManager = new LocalStoreManager();

export default localStoreManager;

export const getWordId = (id: string) => localStoreManager.getDataObject<string>(NEXT_WORD_DATA_KEY_PREFIX + id);
export const setWordId = (id: string, value: string) => localStoreManager.savePermanentData(NEXT_WORD_DATA_KEY_PREFIX + id, value);
export const deleteWordId = (id: string) => localStoreManager.deleteData(NEXT_WORD_DATA_KEY_PREFIX + id);

export const getProfileOptions = () => {
  const simpleMode = localStoreManager.getDataObject<boolean>(SIMPLE_MODE_DATA_KEY);
  const fontSize = localStoreManager.getDataObject<number>(FONT_SIZE_DATA_KEY);
  const darkTheme = localStoreManager.getDataObject<boolean>(DARK_THEME_DATA_KEY);
  return { simpleMode, fontSize, darkTheme };
};
