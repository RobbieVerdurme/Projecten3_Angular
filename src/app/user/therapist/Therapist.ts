import { NormalUser } from '../normal-user/NormalUser';
import { LoginUser } from '../loginuser';
import { OpeningTimes } from './opening-times/opening-times';
import { TherapistType } from './TherapistType';

export class Therapist extends LoginUser{
        private _firstname: string
        private _lastname: string
        private _email: string
        private _telephone: string
        private _function: string
        private _website: string
        private _street: string
        private _houseNumber: string
        private _postalCode: string
        private _city: string
        private _clients = new Array<NormalUser>()
        private _openingTimes: Array<OpeningTimes>
        private _therapistType: TherapistType
    constructor(
        private _therapistId: number,
        private _therapistUsername: string,
        private _therapistRole: string
    ){
        super(_therapistId, _therapistUsername, _therapistRole)
    }

    //Getters
    get therapistType(){
        return this._therapistType;
    } 

    set therapistType(tt: TherapistType){
        this._therapistType = tt
    }

    get website(): string{
        return this._website;
    }

    set website(site: string){
        this._website = site;
    }

    get id(): number{
        return this._therapistId;
    }

    get username(): string{
        return this._therapistUsername
    }

    get Role(): string{
        return this._therapistRole
    }

    get firstname(): string{
        return this._firstname
    }

    set firstname(firstname: string){
        this._firstname = firstname
    }

    get lastname(): string{
        return this._lastname
    }

    set lastname(lastname: string){
        this._lastname = lastname
    }

    get email(): string{
        return this._email
    }

    set email(email: string){
        this._email = email
    }

    get telephone(): string{
        return this._telephone
    }

    set telephone(telephone: string){
        this._telephone = telephone
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

    get postalCode(): string{
        return this._postalCode
    }

    set postalCode(postalCode: string){
        this._postalCode = postalCode
    }

    get city(): string{
        return this._city
    }

    set city(city: string){
        this._city = city
    }

    get function(): string{
        return this._function
    }

    set function(type: string){
        this._function = type
    }

    get clients(): Array<NormalUser>{
        return this._clients
    }

    set clients(clients: Array<NormalUser>){
        this._clients = clients
    }

    get openingTimes(): Array<OpeningTimes>{
        return this._openingTimes
    }

    set openingTimes(openingTimes: Array<OpeningTimes>){
        this._openingTimes = openingTimes;
    }

    //Set JSON object to company object
    static fromJSON(json:any): Therapist{
        const therapist = new Therapist(
            json.therapistId,
            json.username,
            json.role
        );
        therapist.firstname = json.firstName,
        therapist.lastname = json.lastName,
        therapist.email = json.email
        therapist.telephone = json.phoneNumber
        therapist.website = json.website;
        therapist.city = json.city;
        therapist.street = json.street;
        therapist.houseNumber = json.houseNumber;
        therapist.postalCode = json.postalCode;
        therapist.therapistType = json.therapistType;

        var functions: string[] = null;
        
        if(json.therapistType != null){
            json.therapistType.array.forEach(element => {
                functions.push(element.Type); 
            });;
            therapist.function = functions[0];
        }

        var ot: Array<OpeningTimes> = json.openingTimes.map(OpeningTimes.FromJSON)
        if( ot.length == 0){
            for(var i = 0; i < 7; i++){
                therapist.openingTimes.push(new OpeningTimes("geen"));
            }   
        }
        else{
            therapist.openingTimes = ot
        }
        var x = json.Clients
        if(x != undefined){
            therapist.clients = json.clients.map(NormalUser.FromJSON)
        }
        
        return therapist
    }

    //set Therapist object to JSON object
    toJSON(): any{
        return{
            therapistId: this.id,
            firstName: this.firstname,
            lastName: this.lastname,
            email: this.email,
            phoneNumber: this.telephone,
            website: this.website,
            street: this.street,
            houseNumber: this.houseNumber,
            postalCode: this.postalCode,
            city: this.city,
            therapistTypeId: 1,
            OpeningTimes: this.openingTimes.map(ot => ot.toJSON())
        }
    }

    addClient(client: NormalUser){
        this._clients.push(client)
    }

    addOpeningsTime(ot: OpeningTimes){
        this._openingTimes.push(ot)
    }
}