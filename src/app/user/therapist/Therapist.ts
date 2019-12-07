import { NormalUser } from '../normal-user/NormalUser';
import { LoginUser } from '../loginuser';
import { OpeningTimes } from './opening-times/opening-times';

export class Therapist extends LoginUser{
    private _firstname: string
        private _familyname: string
        private _email: string
        private _telephone: string
        private _function: string
        private _website: string
        private _clients = new Array<NormalUser>()
        private _openingTimes = new Array<OpeningTimes>()

    constructor(
        private _therapistId: number,
        private _therapistUsername: string,
        private _therapistRole: string
    ){
        super(_therapistId, _therapistUsername, _therapistRole)
    }

    //Getters
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

    get familyname(): string{
        return this._familyname
    }

    set familyname(familyname: string){
        this._familyname = familyname
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
        therapist.familyname = json.lastName,
        therapist.email = json.email
        therapist.telephone = json.phoneNumber
        therapist.website = json.website;

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

        //therapist.clients = json.Clients.map(NormalUser.FromJSON)
        
        return therapist
    }

    //set Therapist object to JSON object
    toJSON(): any{
        return{
            username: this.username,
            firstname: this.firstname,
            lastname: this.familyname,
            email: this.email,
            telephone: this.telephone,
            function: this.function,
            clients: this.clients.map(client => client.toJSON)
        }
    }

    addClient(client: NormalUser){
        this._clients.push(client)
    }
}