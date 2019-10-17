abstract class LoginUser {
    //constructor
    constructor(
        private _username: string,
        private _role: string
    ) {}
  
  
    //methods
    toJSON(): any {
      return {
        username: this._username,
        role: this._role
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