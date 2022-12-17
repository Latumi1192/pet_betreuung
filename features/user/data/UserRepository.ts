/* eslint-disable no-unused-vars */
import { PetData } from "../domain/dto/PetData";
import { UserData } from "../domain/dto/UserData";

export interface UserRepository {
  addUser(user: UserData): boolean;
  addPet(pet: PetData, user: UserData): boolean;
  getUserFromID(uid: number): UserData;
  deleteUser(user: UserData): boolean;
  generateID(): number;
  isRegistered(account: string, password: string): UserData;
  findPassword(email: string): string;
  editUserData(uid: number, userData: UserData): boolean;
}
