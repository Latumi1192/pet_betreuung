import { AnySoaRecord } from "dns";
import { PetData } from "../dto/PetData";
import { UserData } from "../dto/UserData";

export interface UserService {
  createUserData(userData: UserData, passwordagain: string): boolean;
  createPetData(form: any): boolean;
  signupWarning(userData: UserData, passwordagain: string): string;
  isRegistered(form: any): UserData;
  recoverPassword(email: string): string;
  editProfile(uid: number, form: any): boolean;
}
