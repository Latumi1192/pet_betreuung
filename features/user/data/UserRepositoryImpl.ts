import { UserData } from '../domain/dto/UserData';
import { UserRepository } from './UserRepository';

export class UserRepositoryImpl implements UserRepository {
  saveUser(user: UserData): Promise<void> {
    console.log(user);
    // save to DB
    throw new Error('Method not implemented.');
  }
  // TODO add methods
}
