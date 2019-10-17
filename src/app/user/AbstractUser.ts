abstract class AbstractUser {
    //constructor
    constructor(
      private _email: string,
      private _name: string,
      private _surname: string,
      private _photo: string
    ) {}
  
  
    //methods
    toJSON(): any {
      return {
        email: this._email,
        name: this._name,
        surname: this._surname,
        photo: this._photo
      };
    }
  
    //getters
    get email(){
      return this._email;
    }
  
    get name() {
      return this._name;
    }

    get surname(){
      return this._surname
    }

    get photo(){
      return this._photo
    }
  }