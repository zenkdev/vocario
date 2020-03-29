import firebase from 'firebase/app';

class UserProfile {
  constructor({
    id,
    email,
    displayName,
    photoURL,
    simpleMode,
    fontSize,
    darkTheme,
  }: {
    id?: string;
    email?: string;
    displayName?: string;
    photoURL?: string;
    simpleMode?: boolean | null;
    fontSize?: number | null;
    darkTheme?: boolean | null;
  }) {
    this.id = id || '';
    this.email = email || '';
    this.displayName = displayName || '';
    this.photoURL = photoURL;
    this.simpleMode = simpleMode != null ? simpleMode : true;
    this.fontSize = fontSize || 1;
    this.darkTheme = darkTheme != null ? darkTheme : false;
  }

  public id: string;

  public email: string;

  // eslint-disable-next-line react/static-property-placement
  public displayName: string;

  public photoURL?: string;

  public simpleMode: boolean;

  public fontSize: number;

  public darkTheme: boolean;
}

export default UserProfile;

export function createUserProfile(payload: firebase.database.DataSnapshot, options?: any): UserProfile {
  const id = payload.key as string;
  const { email, displayName, photoURL, simpleMode, darkTheme, fontSize } = payload.val();
  const data: any = { id, email, displayName, photoURL, simpleMode, darkTheme, fontSize };
  data.simpleMode = options != null && options.simpleMode != null ? options.simpleMode : data.simpleMode;
  data.darkTheme = options != null && options.darkTheme != null ? options.darkTheme : data.darkTheme;
  data.fontSize = options != null && options.fontSize != null ? options.fontSize : data.fontSize;
  return new UserProfile(data);
}
