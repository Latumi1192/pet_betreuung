import { PetData } from "../dto/PetData";
import { UserData } from "../dto/UserData";

export interface UserService {
  createUserData(
    firstname: string,
    lastname: string,
    addresse: string,
    zipcode: number,
    city: string,
    country: string,
    telephone: number,
    gender: string,
    account: string,
    password: string,
    email: string,
    profilepicture: string
  ): UserData;
  createPetData(
    kind: string,
    race: string,
    petpicture: string,
    petdocu: string,
    about: string
  ): PetData;
}
