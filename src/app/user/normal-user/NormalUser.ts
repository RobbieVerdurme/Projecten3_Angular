import { Challenge } from 'src/app/challenge/Challenge';

export class NormalUser{
    //Constructor
    
    private _challenges = new Array<Challenge>()
    constructor(
        private _id: number,
        private _firstname: string,
        private _lastname: string,
        private _email: string,
        private _telephone: string,
        private _contract: Date,
    ){}

    //Getters
    get id(): number{
        return this._id;
    }

    get firstname(): string{
        return this._firstname;
    }

    get lastname(): string{
        return this._lastname;
    }

    get email(): string{
        return this._email
    }

    get telephone(): string{
        return this._telephone
    }

    get contract(): Date{
        return this._contract
    }

    get challenges(): Challenge[]{
        return this._challenges
    }

    //Set JSON object to NormalUser object
    static FromJSON(json: any): NormalUser{
        const normalUser = new NormalUser(
            json.userId,
            json.firstName,
            json.familyName,
            json.email,
            json.phone,
            json.contract
        )
        return normalUser;
    }

    //Set NormalUser object to JSON object
    toJSON(): any{
        return{
            id: this.id,
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            telephone: this.telephone,
            contract: this.contract,
            challenges: this.challenges.map(ch => ch.toJSON())
        }
    }

    addChallenge(challenge: Challenge) {
        this._challenges.push(challenge);
    }
}