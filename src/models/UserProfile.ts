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
