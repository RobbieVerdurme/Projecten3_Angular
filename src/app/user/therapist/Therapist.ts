import { NormalUser } from '../normal-user/NormalUser';
import { LoginUser } from '../loginuser';

export class Therapist extends LoginUser{
    private _firstname: string
        private _familyname: string
        private _email: string
        private _telephone: string
        private _function: string
        private _clients = new Array<NormalUser>()

    constructor(
        private _therapistId: number,
        private _therapistUsername: string,
        private _therapistRole: string
    ){
        super(_therapistId, _therapistUsername, _therapistRole)
    }

    //Getters
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

    //Set JSON object to company object
    static fromJSON(json:any): Therapist{
        const therapist = new Therapist(
            json.id,
            json.username,
            json.role
        );
        therapist.firstname = json.firstname,
        therapist.familyname = json.lastname,
        therapist.email = json.email,
        therapist.telephone = json.telephone,
        therapist.function = json.function
        therapist.clients = json.Clients.map(NormalUser.FromJSON)
        
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