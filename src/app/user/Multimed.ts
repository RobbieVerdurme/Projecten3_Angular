import { LoginUser } from './loginuser';

export class Multimed extends LoginUser {
    //constructor
    constructor(
        private _multimedId: number,
        private _multimedUsername: string,
        private _multimedRole: string,
    )
    {
        super(_multimedId, _multimedUsername, _multimedRole)
    }
    //methods  
    toJSON(): any {
        return {
            id: this._multimedId,
          username: this._multimedUsername,
          role: this._multimedRole
        };
      }
  }