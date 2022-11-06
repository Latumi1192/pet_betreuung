/* eslint-disable no-unused-vars */
import { PetData } from "../domain/dto/PetData";
import { UserData } from "../domain/dto/UserData";

export interface UserRepository {
  userDB: UserData[];
  addUser(user: UserData): boolean;
  addPet(pet: PetData, user: UserData): boolean;
  // getPassword(account: string): string;
  getUser(uid: number): UserData;
  deleteUser(user: UserData): boolean;
  generateID(): number;
}
