import { PetData } from "../dto/PetData";
import { UserData } from "../dto/UserData";
import { UserService } from "./UserService";

export class UserServiceImpl implements UserService {
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
  ): UserData {
    const userData: UserData = {
      firstname: firstname,
      lastname: lastname,
      addresse: addresse,
      zipcode: zipcode,
      city: city,
      country: country,
      telephone: telephone,
      gender: gender,
      account: account,
      password: password,
      email: email,
      profilepicture: profilepicture,
      uid: 0,
      pet: [],
    };
    return userData;
  }
  createPetData(
    kind: string,
    race: string,
    petpicture: string,
    petdocu: string,
    about: string
  ): PetData {
    const petData: PetData = {
      kind: kind,
      race: race,
      petpicture: petpicture,
      petdocu: petdocu,
      about: about,
      uid: 0,
    };
    return petData;
  }
}
