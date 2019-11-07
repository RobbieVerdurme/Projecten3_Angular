export class LoginUser {
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

    //set JSON object to LoginUser object
    static FromJSON(json:any): LoginUser{
      const loginUser = new LoginUser(
        json.unique_name,
        json.Role
      );
      return loginUser
    }
  
    //getters
    get username(){
      return this._username;
    }
  
    get role() {
      return this._role;
    }

    
  }