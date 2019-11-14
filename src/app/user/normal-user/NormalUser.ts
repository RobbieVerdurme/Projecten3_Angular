import { Challenge } from 'src/app/challenge/Challenge';

export class NormalUser{
    //Constructor
    constructor(
        private _id: number,
        private _username: string,
        private _firstname: string,
        private _lastname: string,
        private _email: string,
        private _telephone: string,
        private _contract: Date,
        private _challenges = new Array<Challenge>()
    ){}

    //Getters
    get id(): number{
        return this._id;
    }

    get username(): string{
        return this._username;
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
            json.id,
            json.username,
            json.firstname,
            json.lastname,
            json.email,
            json.telephone,
            json.contract,
            json.challenges.map(Challenge.fromJSON)
        )
        return normalUser;
    }

    //Set NormalUser object to JSON object
    toJSON(): any{
        return{
            id: this.id,
            username: this.username,
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