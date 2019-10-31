export class Therapist{
    constructor(
        private _id: number,
        private _username: string,
        private _firstname: string, 
        private _familyname: string,
        private _email: string,
        private _telephone: string,
        private _function: string,
        private _clients = new Array<NormalUser>()
    ){}

    //Getters
    get id(): number{
        return this._id;
    }

    get username(): string{
        return this._username
    }

    get firstname(): string{
        return this._firstname
    }

    get familyname(): string{
        return this._familyname
    }

    get email(): string{
        return this._email
    }

    get telephone(): string{
        return this._telephone
    }

    get function(): string{
        return this._function
    }

    get clients(): Array<NormalUser>{
        return this._clients
    }

    //Set JSON object to company object
    static fromJSON(json:any): Therapist{
        const therapist = new Therapist(
            json.id,
            json.username,
            json.firstname,
            json.familyname,
            json.email,
            json.telephone,
            json.function
        );
        return therapist
    }

    //set Therapist object to JSON object
    toJSON(): any{
        return{
            username: this.username,
            firstname: this.firstname,
            familyname: this.familyname,
            email: this.email,
            telephone: this.telephone,
            function: this.function,
            clients: this.clients.map(client => client.toJSON)
        }
    }
}