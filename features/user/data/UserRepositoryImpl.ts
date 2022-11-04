import { UserData } from "../domain/dto/UserData";
import { UserRepository } from "./UserRepository";

export class UserRepositoryImpl implements UserRepository {
  userDB: UserData[] = [];

  addUser(user: UserData): boolean {
    if (user == null) throw new Error("Check parameter");
    if (this.isValidAccount(user) && this.isValidEmail(user)) {
      user.uid = this.idgenerate();
      this.userDB.push(user);
      return true;
    } else return false;
  }

  private isValidAccount(user: UserData): boolean {
    if (user == null) throw new Error("Check parameter");
    for (var i = 0; i < this.userDB.length; i++) {
      if (this.userDB[i]?.account == user.account) return false;
    }
    return true;
  }

  private isValidEmail(user: UserData): boolean {
    if (user == null) throw new Error("Check parameter");
    for (var i = 0; i < this.userDB.length; i++) {
      if (this.userDB[i]?.email == user.email) return false;
    }
    return true;
  }

  getPassword(account: string): string {
    let tmppassword;
    for (var i = 0; i < this.userDB.length; i++) {
      if (this.userDB[i]?.account == account)
        tmppassword = this.userDB[i]?.password;
    }
    return tmppassword == null ? "" : tmppassword;
  }

  getUser(uid: number): UserData {
    let tmpUser: UserData = null;
    for (var i = 0; i < this.userDB.length; i++) {
      if (this.userDB[i]?.uid == uid) tmpUser = this.userDB[i];
    }
    return tmpUser;
  }

  deleteUser(user: UserData): boolean {
    if (user == null) throw new Error("Check parameter");
    for (var i = 0; i < this.userDB.length; i++) {
      if (this.userDB[i]?.uid == user.uid) {
        this.userDB.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  idgenerate(): number {
    return Math.floor(Math.random() * 1000000);
  }
}
