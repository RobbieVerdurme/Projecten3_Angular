class Therapist {
    //constructor
    constructor(
        private _TherapistUsername: string,
        private _TherapistRole: string
    )
    {
        //super(_TherapistUsername, _TherapistRole)
    }
    //methods 
    toJSON(): any {
        return {
          username: this._TherapistUsername,
          role: this._TherapistRole,
        };
      }
  }