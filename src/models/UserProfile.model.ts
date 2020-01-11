class UserProfile {
  constructor(id?: string, email?: string, displayName?: string, photoURL?: string, simpleMode?: boolean) {
    this.id = id || '';
    this.email = email || '';
    this.displayName = displayName || '';
    this.photoURL = photoURL;
    this.simpleMode = simpleMode != null ? simpleMode : true;
  }

  public id: string;

  public email: string;

  // eslint-disable-next-line react/static-property-placement
  public displayName: string;

  public photoURL?: string;

  public simpleMode: boolean;

  static fromSnapshot(payload: firebase.database.DataSnapshot): UserProfile {
    const id = payload.key as string;
    const { email, displayName, photoURL, simpleMode } = payload.val();
    return new UserProfile(id, email, displayName, photoURL, simpleMode);
  }
}

export default UserProfile;
