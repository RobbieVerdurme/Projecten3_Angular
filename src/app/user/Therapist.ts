class Therapist extends LoginUser {
    //constructor
    constructor(
        private _TherapistUsername: string,
        private _TherapistRole: string,
        private _telephone:string,
        private _function:string,
        private _website: string,
        private _workinghours:string
    )
    {
        super(_TherapistUsername, _TherapistRole)
    }
    //methods 
    toJSON(): any {
        return {
          username: this._TherapistUsername,
          role: this._TherapistRole,
          telephone: this._telephone,
          function: this._function,
          website: this._website,
          workinghours: this._workinghours
        };
      }

    //getters
    get Telephone(){
        return this._telephone
    }

    get Function(){
        return this._function
    }

    get Website(){
        return this._website
    }

    get Workinghours(){
        return this._workinghours
    }
  }