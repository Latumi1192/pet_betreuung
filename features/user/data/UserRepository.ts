/* eslint-disable no-unused-vars */
import { UserData } from '../domain/dto/UserData';

export interface UserRepository {
  // TODO add methods

  saveUser(user: UserData): Promise<void>;
}
