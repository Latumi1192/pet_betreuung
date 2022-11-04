/* eslint-disable no-unused-vars */
import { UserData } from "../domain/dto/UserData";

export interface UserRepository {
  userDB: UserData[];
  addUser(user: UserData): boolean;
  getPassword(account: string): string;
  getUser(uid: number): UserData;
  deleteUser(user: UserData): boolean;
  idgenerate(): number;
}
