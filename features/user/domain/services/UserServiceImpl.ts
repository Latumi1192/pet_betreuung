import { UserRepositoryImpl } from "../../data/UserRepositoryImpl";
import { PetData } from "../dto/PetData";
import { UserData } from "../dto/UserData";
import { UserService } from "./UserService";

export class UserServiceImpl implements UserService {
  userRepo = new UserRepositoryImpl();
  emailRe = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");

  isRegistered(form: any): boolean {
    return this.userRepo.isRegistered(form.account, form.password);
  }

  recoverPassword(email: string): string {
    return this.userRepo.findPassword(email);
  }

  createUserData(form: any) {
    var success = false;
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
      this.emailRe.test(form.email)
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

  signupWarning(form: any): String {
    var warning = "";
    switch (form) {
      case form.password != form.passwordagain:
        warning = "Password is not identical";
        break;
      case form.firstname == "":
        warning = "Missing first name";
        break;
      case form.lastname == "":
        warning = warning = "Missing last name";
        break;
      case form.addresse == "":
        warning = "Missing addresse";
        break;
      case form.zipcode == 0:
        warning = "Missing zipcode";
        break;
      case form.city == "":
        warning = "Missing city";
        break;
      case form.country == "":
        warning = "Missing country";
        break;
      case form.account == "":
        warning = "Missing account";
        break;
      case form.password == "":
        warning = "Missing password";
        break;
      case form.passwordagain == "":
        warning = "Missing password again ";
        break;
      case form.email != "":
        warning = "Missing email";
        break;
      case this.emailRe.test(form.email) == false:
        warning = "Email is invalid";
        break;
      default:
        break;
    }
    return warning;
  }

  createPetData(form: any) {
    var success = false;

    return success;
  }
}
