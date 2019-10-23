class Multimed extends LoginUser{
    //constructor
    constructor(
        private _MultimedUsername: string,
        private _MultimedRole: string,
    )
    {
        super(_MultimedUsername, _MultimedRole)
    }
    //methods  
    toJSON(): any {
        return {
          username: this._MultimedUsername,
          role: this._MultimedRole
        };
      }
    //getters
  }