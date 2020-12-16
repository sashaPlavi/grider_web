import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
import { Collections } from './Collections';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const RootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static builUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(RootUrl)
    );
  }
  static buildUserCollections(): Collections<User, UserProps> {
    return new Collections<User, UserProps>(RootUrl, (json: UserProps) =>
      User.builUser(json)
    );
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
