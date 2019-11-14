import { NormalUser } from '../user/normal-user/NormalUser'

export class Company{
    //constructor
    constructor(
        private _id: number,
        private _name: string,
        private _phone: string, 
        private _mail: string,
        private _street: string,
        private _houseNumber: string,
        private _city: string,
        private _postalCode: string,
        private _country: string,
        private _site: string,
        private _contract: Date,
        private _companyMembers = new Array<NormalUser>()
    ){}

    //getters
    get id(): number{
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

    get site(): string{
        return this._site
    }

    get contract(): Date{
        return this._contract
    }

    get companyMembers(): NormalUser[]{
        return this._companyMembers
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
            json.country,
            json.site,
            json.contract,
            json.companyMembers.map(NormalUser.FromJSON)
        );
        return company;
    }

    //set company object to JSON object
    toJSON(): any{
        return{
            id: this.id,
            name: this.name,
            phone: this.phone,
            mail: this.mail,
            street: this.street,
            houseNumber: this.houseNumber,
            city: this.city,
            postalCode: this.postalCode,
            country: this.country,
            site: this.site,
            contract: this._contract,
            companyMembers: this.companyMembers.map(cm => cm.toJSON())
        }
    }

    addCompanyMember(member: NormalUser) {
        this._companyMembers.push(member);
    }
}