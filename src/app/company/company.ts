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
}