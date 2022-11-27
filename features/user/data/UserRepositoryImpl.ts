import { PetData } from "../domain/dto/PetData";
import { UserData } from "../domain/dto/UserData";
import { UserRepository } from "./UserRepository";

export class UserRepositoryImpl implements UserRepository {
  userDB: UserData[] = [];
  emptyDB: UserData[] = [];

  getUserDB(): UserData[] {
    return JSON.parse(localStorage.getItem("userDB") || "");
  }

  findPassword(email: string): string {
    if (email == null) throw new Error("Check parameter");

    this.userDB = this.getUserDB();

    let password = "";

    for (var i = 0; i < this.userDB.length; i++) {
      if (this.userDB[i].email == email) password = this.userDB[i].password;
    }
    return password;
  }

  resetDB() {
    localStorage.setItem("userDB", JSON.stringify(this.emptyDB));
  }

  isRegistered(account: string, password: string): boolean {
    if (account == null || password == null || account == "" || password == "")
      throw new Error("Check parameter");

    this.userDB = this.getUserDB();

    for (var i = 0; i < this.userDB.length; i++) {
      if (
        this.userDB[i].account == account &&
        this.userDB[i].password == password
      )
        return true;
    }
    return false;
  }

  addUser(user: UserData): boolean {
    if (user == null) throw new Error("Check parameter");

    if (this.isValidAccount(user) && this.isValidEmail(user)) {
      user.uid = this.generateID();
      this.userDB = this.getUserDB();
      this.userDB.push(user);
      localStorage.setItem("userDB", JSON.stringify(this.userDB));
      console.log(this.userDB);
      return true;
    } else return false;
  }

  addPet(pet: PetData, user: UserData): boolean {
    if (pet == null || user == null) throw new Error("Check parameter");

    pet.uid = user.uid;
    user.pet.push(pet);
    return true;
  }

  private isValidAccount(user: UserData): boolean {
    if (user == null) throw new Error("Check parameter");

    this.userDB = this.getUserDB();

    for (var i = 0; i < this.userDB.length; i++) {
      if (this.userDB[i].account == user.account) return false;
    }
    return true;
  }

  private isValidEmail(user: UserData): boolean {
    if (user == null) throw new Error("Check parameter");

    this.userDB = this.getUserDB();

    for (var i = 0; i < this.userDB.length; i++) {
      if (this.userDB[i].email == user.email) return false;
    }
    return true;
  }

  // getPassword(account: string): string {
  //   let tmppassword;
  //   for (var i = 0; i < this.userDB.length; i++) {
  //     if (this.userDB[i]?.account == account)
  //       tmppassword = this.userDB[i]?.password;
  //   }
  //   return tmppassword == null ? "" : tmppassword;
  // }

  getUser(uid: number): UserData {
    let tmpUser;

    this.userDB = this.getUserDB();

    for (var i = 0; i < this.userDB.length; i++) {
      if (this.userDB[i].uid == uid) tmpUser = this.userDB[i];
    }
    return tmpUser as UserData;
  }

  deleteUser(user: UserData): boolean {
    if (user == null) throw new Error("Check parameter");

    this.userDB = this.getUserDB();

    for (var i = 0; i < this.userDB.length; i++) {
      if (this.userDB[i].uid == user.uid) {
        this.userDB.splice(i, 1);
        localStorage.setItem("userDB", JSON.stringify(this.userDB));
        return true;
      }
    }
    return false;
  }

  generateID(): number {
    return Math.floor(Math.random() * 1000000);
  }
}
