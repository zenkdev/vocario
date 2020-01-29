class UserProfile {
  constructor({
    id,
    email,
    displayName,
    photoURL,
    simpleMode,
    fontSize,
  }: {
    id?: string;
    email?: string;
    displayName?: string;
    photoURL?: string;
    simpleMode?: boolean | null;
    fontSize?: number | null;
  }) {
    this.id = id || '';
    this.email = email || '';
    this.displayName = displayName || '';
    this.photoURL = photoURL;
    this.simpleMode = simpleMode != null ? simpleMode : true;
    this.fontSize = fontSize || 1;
  }

  public id: string;

  public email: string;

  // eslint-disable-next-line react/static-property-placement
  public displayName: string;

  public photoURL?: string;

  public simpleMode: boolean;

  public fontSize: number;
}

export default UserProfile;
