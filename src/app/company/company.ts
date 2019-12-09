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

    set id(id: number){
        this._id = id
    }

    get name(): string{
        return this._name
    }

    set name(name: string){
        this._name = name
    }

    get phone(): string{
        return this._phone
    }

    set phone(phone: string){
        this._phone = phone
    }

    get mail(): string{
        return this._mail
    }

    set mail(mail: string){
        this._mail = mail
    }

    get street(): string{
        return this._street
    }

    set street(street: string){
        this._street = street
    }

    get houseNumber(): string{
        return this._houseNumber
    }

    set houseNumber(houseNumber: string){
        this._houseNumber = houseNumber
    }

    get city(): string{
        return this._city
    }

    set city(city: string){
        this._city = city
    }

    get postalCode(): string{
        return this._postalCode
    }

    set postalCode(postalCode: string){
        this._postalCode = postalCode
    }

    get country(): string{
        return this._country
    }

    set country(country: string){
        this._country = country
    }

    get site(): string{
        return this._site
    }

    set site(site: string){
        this._site = site
    }

    get contract(): Date{
        return this._contract
    }

    set contract(contract: Date){
        this._contract = contract
    }

    get contractValid(): string{
        var currentDate = new Date();
        var contractValue = this.contract;
        if(contractValue > currentDate)
        {
            return "✓";
        }
        return "X";
    }

    get companyMembers(): NormalUser[]{
        return this._companyMembers
    }

    //Set JSON object to company object
    static fromJSON(json: any): Company{
        const company = new Company(
            json.companyId,
            json.name,
            json.phone,
            json.mail,
            json.street,
            json.houseNumber,
            json.city,
            json.postalCode,
            json.country,
            json.site,
            new Date(json.contract),
            json.companyMembers.map(NormalUser.FromJSON)
        );
        return company;
    }

    //set company object to JSON object
    toJSON(): any{
        return{
            companyId: this.id,
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