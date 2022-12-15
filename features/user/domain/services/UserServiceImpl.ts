import { UserRepositoryImpl } from "../../data/UserRepositoryImpl";
import { PetData } from "../dto/PetData";
import { UserData } from "../dto/UserData";
import { UserService } from "./UserService";

export class UserServiceImpl implements UserService {
  userRepo = new UserRepositoryImpl();
  emailRe = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
  accountRe = new RegExp("^[\\w.-]{7,19}[0-9a-zA-Z]$");
  passwordRe = new RegExp("^^[\\w.-]{7,19}[0-9a-zA-Z]$");

  isRegistered(form: any): UserData {
    return this.userRepo.isRegistered(form.account, form.password);
  }

  recoverPassword(email: string): string {
    return this.userRepo.findPassword(email);
  }

  editProfile(uid: number, form: any): boolean {
    var success = false;
    console.log(this.editWarning(form));
    if (this.editWarning(form) === "") {
      let tmpUserData = this.userRepo.getUserFromID(uid);
      console.log(tmpUserData);
      this.userRepo.editUserData(uid, form)
        ? (success = true)
        : (success = false);
      let newUserData = this.userRepo.getUserFromID(uid);
      console.log(newUserData);
    }
    return success;
  }

  editWarning(form: any): string {
    switch (true) {
      case form.firstname === "":
        return "Missing first name";
      case form.lastname === "":
        return "Missing last name";
      case form.addresse === "":
        return "Missing addresse";
      case form.zipcode === 0:
        return "Missing zipcode";
      case form.city === "":
        return "Missing city";
      case form.country === "":
        return "Missing country";
      case form.telephone === 0:
        return "Missing telephone";
      default:
        return "";
    }
  }

  createUserData(userData: UserData, passwordagain: string): boolean {
    var success = false;
    if (this.signupWarning(userData, passwordagain) === "") {
      console.log(userData);
      this.userRepo.addUser(userData) ? (success = true) : (success = false);
    }
    return success;
  }

  signupWarning(userData: UserData, passwordagain: string): string {
    switch (true) {
      case userData.firstname === "":
        return "Missing first name";
      case userData.lastname === "":
        return "Missing last name";
      case userData.addresse === "":
        return "Missing addresse";
      case userData.zipcode === 0:
        return "Missing zipcode";
      case userData.city === "":
        return "Missing city";
      case userData.country === "":
        return "Missing country";
      case userData.account === "":
        return "Missing account";
      case this.accountRe.test(userData.account) === false:
        return "Account must have 8-20 character";
      case userData.password === "":
        return "Missing password";
      case this.passwordRe.test(userData.password) === false:
        return "Password must have 8-20 character";
      case passwordagain === "":
        return "Missing password again ";
      case userData.password != passwordagain:
        return "Password is not identical";
      case userData.email === "":
        return "Missing email";
      case this.emailRe.test(userData.email) === false:
        return "Email is invalid";
      case userData.telephone === 0:
        return "Missing telephone";
      default:
        return "";
    }
  }

  createPetData(form: any) {
    var success = false;

    return success;
  }
}
