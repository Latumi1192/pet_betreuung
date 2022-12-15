import { PetData } from "../domain/dto/PetData";
import { UserData } from "../domain/dto/UserData";
import { UserRepository } from "./UserRepository";

export class UserRepositoryImpl implements UserRepository {
  userDB: UserData[] = [];
  emptyDB: UserData[] = [];
  emptyUserData: UserData = {
    firstname: "",
    lastname: "",
    addresse: "",
    zipcode: 0,
    city: "",
    country: "",
    telephone: 0,
    gender: "",
    account: "",
    password: "",
    email: "",
    profilepicture: "",
    uid: 0,
    pet: [],
  };

  editUserData(uid: number, form: any): boolean {
    let tmpUserData = this.getUserFromID(uid);
    tmpUserData.firstname = form.firstname;
    tmpUserData.lastname = form.firstname;
    tmpUserData.addresse = form.firstname;
    tmpUserData.zipcode = form.firstname;
    tmpUserData.city = form.firstname;
    tmpUserData.country = form.firstname;
    tmpUserData.telephone = form.firstname;
    return true;
  }
  getUserDB(): UserData[] {
    try {
      return JSON.parse(localStorage.getItem("userDB") || "");
    } catch (e) {
      return this.emptyDB;
    }
  }

  findPassword(email: string): string {
    if (email === null) throw new Error("Check parameter");

    this.userDB = this.getUserDB();

    let password = "";

    for (let i = 0; i < this.userDB.length; i++) {
      if (this.userDB[i].email === email) password = this.userDB[i].password;
    }
    return password;
  }

  //Will delete later
  resetDB() {
    localStorage.setItem("userDB", JSON.stringify(this.emptyDB));
  }

  //Will delete later
  printDB() {
    this.userDB = this.getUserDB();
    console.log(this.userDB);
  }

  isRegistered(account: string, password: string): UserData {
    if (
      account === null ||
      password === null ||
      account === "" ||
      password === ""
    )
      throw new Error("Check parameter");

    this.userDB = this.getUserDB();
    for (let i = 0; i < this.userDB.length; i++) {
      if (
        this.userDB[i].account === account &&
        this.userDB[i].password === password
      )
        return this.userDB[i];
    }
    return this.emptyUserData;
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
    if (pet === null || user === null) throw new Error("Check parameter");

    pet.uid = user.uid;
    user.pet.push(pet);
    return true;
  }

  private isValidAccount(user: UserData): boolean {
    if (user === null) throw new Error("Check parameter");

    this.userDB = this.getUserDB();

    for (let i = 0; i < this.userDB.length; i++) {
      if (this.userDB[i].account === user.account) return false;
    }
    return true;
  }

  private isValidEmail(user: UserData): boolean {
    if (user === null) throw new Error("Check parameter");

    this.userDB = this.getUserDB();

    for (let i = 0; i < this.userDB.length; i++) {
      if (this.userDB[i].email === user.email) return false;
    }
    return true;
  }

  getUserFromID(uid: number): UserData {
    let tmpUser;

    this.userDB = this.getUserDB();

    for (let i = 0; i < this.userDB.length; i++) {
      if (this.userDB[i].uid === uid) tmpUser = this.userDB[i];
    }
    return tmpUser as UserData;
  }

  deleteUser(user: UserData): boolean {
    if (user == null) throw new Error("Check parameter");

    this.userDB = this.getUserDB();

    for (let i = 0; i < this.userDB.length; i++) {
      if (this.userDB[i].uid === user.uid) {
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
