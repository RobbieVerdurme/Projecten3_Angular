class Company{
    //constructor
    constructor(
        private _id: Int32Array,
        private _name: string,
        private _phone: string, 
        private _mail: string,
        private _street: string,
        private _houseNumber: string,
        private _city: string,
        private _postalCode: string,
        private _country: string
    ){}

    //getters
    get id(): Int32Array{
        return this._id
    }

    get name(): string{
        return this._name
    }

    get phone(): string{
        return this._phone
    }

    get mail(): string{
        return this._mail
    }

    get street(): string{
        return this._street
    }

    get houseNumber(): string{
        return this._houseNumber
    }

    get city(): string{
        return this._city
    }

    get postalCode(): string{
        return this._postalCode
    }

    get country(): string{
        return this._country
    }

    //Set JSON object to company object
    static fromJSON(json: any): Company{
        const company = new Company(
            json.id,
            json.name,
            json.phone,
            json.mail,
            json.street,
            json.houseNumber,
            json.city,
            json.postalCode,
            json.country
        );
        return company;
    }

    //set company object to JSON object
    toJSON(): any{
        return{
            name: this.name,
            phone: this.phone,
            mail: this.mail,
            street: this.street,
            houseNumber: this.houseNumber,
            city: this.city,
            postalCode: this.postalCode,
            country: this.country
        }
    }
}