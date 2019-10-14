export class LoginUser {
    //constructor
    constructor(
        private _username: string,
        private _role: string
    ) {}
  
  
    //methods
    toJSON(): any {
      return {
        username: this._username
      };
    }
  
    //getters
    get username(){
      return this._username;
    }
  
    get role() {
      return this._role;
    }
  }