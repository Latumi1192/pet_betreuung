import { UserRepositoryImpl } from "../../data/UserRepositoryImpl";
import { HostData } from "../dto/HostData";
import { PetData } from "../dto/PetData";
import { UserData } from "../dto/UserData";
import { UserService } from "./UserService";

export class UserServiceImpl implements UserService {
  userRepo = new UserRepositoryImpl();
  emailRe = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
  accountRe = new RegExp("^[\\w.-]{7,19}[0-9a-zA-Z]$");
  passwordRe = new RegExp("^^[\\w.-]{7,19}[0-9a-zA-Z]$");

  createHostData(hostData: HostData): boolean {
    let success = false;
    if (this.signupHostWarning(hostData) === "")
      this.userRepo.addHost(hostData) ? (success = true) : (success = false);
    return success;
  }

  editHostData(hostData: HostData): boolean {
    throw new Error("Method not implemented.");
  }

  signupHostWarning(hostData: HostData): string {
    switch (true) {
      case hostData.kind === "":
        return "Missing Kind of Pet";
      case hostData.race === "":
        return "Missing Race of Pet";
      case hostData.abouthost === "":
        return "Tell us about you";
      default:
        return "";
    }
  }

  isRegistered(form: any): UserData {
    return this.userRepo.isRegistered(form.account, form.password);
  }

  recoverPassword(email: string): string {
    return this.userRepo.findPassword(email);
  }

  editProfile(uid: number, userData: UserData): boolean {
    let success = false;
    console.log(this.editWarning(userData));
    if (this.editWarning(userData) === "") {
      this.userRepo.editUserData(uid, userData)
        ? (success = true)
        : (success = false);
    }
    return success;
  }

  editWarning(userData: UserData): string {
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
      case userData.telephone === 0:
        return "Missing telephone";
      default:
        return "";
    }
  }

  createUserData(userData: UserData, passwordagain: string): boolean {
    let success = false;
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
