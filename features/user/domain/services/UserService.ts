import { AnySoaRecord } from "dns";
import { PetData } from "../dto/PetData";
import { UserData } from "../dto/UserData";

export interface UserService {
  createUserData(form: any): boolean;
  createPetData(form: any): boolean;
  signupWarning(form: any): String;
  isRegistered(form: any): boolean;
  recoverPassword(email:string): string;
}
