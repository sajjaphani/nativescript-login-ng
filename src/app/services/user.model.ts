export class User {
  email?: string;
  password: string;

  hasEmail() {
    return this.email != '';
  }
}