/* eslint-disable no-unused-vars */
import { HostData } from "../domain/dto/HostData";
import { PetData } from "../domain/dto/PetData";
import { UserData } from "../domain/dto/UserData";

export interface UserRepository {
  addUser(user: UserData): boolean;
  addPet(pet: PetData, user: UserData): boolean;
  getUserFromID(uid: number): UserData;
  deleteUser(user: UserData): boolean;
  generateID(): number;
  isRegistered(account: string, password: string): UserData;
  isRegisteredHost(uid: number): boolean;
  findPassword(email: string): string;
  editUserData(uid: number, userData: UserData): boolean;
  addHost(host: HostData): boolean;
  editHost(host: HostData): boolean;
}
