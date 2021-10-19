interface UserData {
  iat: number,
  exp: number,
  roles: string[]
  username: string;
}

export default class User {
  private token: string;

  private data: UserData;

  constructor(token: string) {
    this.token = token;
    this.data = JSON.parse(atob(this.token.split('.')[1]));
  }

  public get username() {
    return this.data.username;
  }

  public get roles() {
    return this.data.roles;
  }
}
