class NormalUser{
    //Constructor
    constructor(
        private _id: number,
        private _username: string,
        private _firstname: string,
        private _familyname: string,
        private _email: string,
        private _telephone: string
        //add list of challenges and list of categories
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

    get familyname(): string{
        return this._familyname;
    }

    get email(): string{
        return this._email
    }

    get telephone(): string{
        return this._telephone
    }

    //Set JSON object to NormalUser object
    static fromJSON(json: any): NormalUser{
        const normalUser = new NormalUser(
            json.id,
            json.username,
            json.firstname,
            json.familyname,
            json.email,
            json.telephone
        )
        return normalUser;
    }

    //Set NormalUser object to JSON object
    toJSON(): any{
        return{
            username: this.username,
            firstname: this.firstname,
            familyname: this.familyname,
            email: this.email,
            telephone: this.telephone
        }
    }
}