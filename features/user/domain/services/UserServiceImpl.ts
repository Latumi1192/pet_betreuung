import { UserRepositoryImpl } from "../../data/UserRepositoryImpl";
import { PetData } from "../dto/PetData";
import { UserData } from "../dto/UserData";
import { UserService } from "./UserService";

export class UserServiceImpl implements UserService {
  userRepo = new UserRepositoryImpl();
  createUserData(form: any) {
    var success = false;
    const emailRe = new RegExp(
      "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
    );
    if (
      form.password == form.passwordagain &&
      form.firstname != "" &&
      form.lastname != "" &&
      form.addresse != "" &&
      form.zipcode != 0 &&
      form.city != "" &&
      form.country != "" &&
      form.account != "" &&
      form.password != "" &&
      form.email != "" &&
      emailRe.test(form.email)
    ) {
      const userData: UserData = {
        firstname: form.firstname,
        lastname: form.lastname,
        addresse: form.addresse,
        zipcode: form.zipcode,
        city: form.city,
        country: form.country,
        telephone: form.telephone,
        gender: form.gender,
        account: form.account,
        password: form.password,
        email: form.email,
        profilepicture: form.profilepicture,
        uid: 0,
        pet: [],
      };
      console.log(userData);
      this.userRepo.addUser(userData) ? (success = true) : (success = false);
    }
    return success;
  }

  createPetData(form: any) {
    var success = false;

    return success;
  }
}
