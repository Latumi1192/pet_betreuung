import { UserRepositoryImpl } from "../../data/UserRepositoryImpl";
import { PetData } from "../dto/PetData";
import { UserData } from "../dto/UserData";
import { UserService } from "./UserService";

export class UserServiceImpl implements UserService {
  userRepo = new UserRepositoryImpl();
  emailRe = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
  accountRe = new RegExp("^[\\w.-]{7,19}[0-9a-zA-Z]$");
  passwordRe = new RegExp("^^[\\w.-]{7,19}[0-9a-zA-Z]$");

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

  signupWarning(form: any): string {
    switch (true) {
      case this.accountRe.test(form.account) == false:
        return "Account must have 8 character";
      case this.passwordRe.test(form.password) == false:
        return "Password must have 8 character";
      case form.password != form.passwordagain:
        return "Password is not identical";
      case form.firstname == "":
        return "Missing first name";
      case form.lastname == "":
        return "Missing last name";
      case form.addresse == "":
        return "Missing addresse";
      case form.zipcode == 0:
        return "Missing zipcode";
      case form.city == "":
        return "Missing city";
      case form.country == "":
        return "Missing country";
      case form.account == "":
        return "Missing account";
      case form.password == "":
        return "Missing password";
      case form.passwordagain == "":
        return "Missing password again ";
      case form.email == "":
        return "Missing email";
      case this.emailRe.test(form.email) == false:
        return "Email is invalid";
      default:
        return "";
    }
  }

  createPetData(form: any) {
    var success = false;

    return success;
  }
}
