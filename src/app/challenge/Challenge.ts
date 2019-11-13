export class Challenge{
    constructor(
        private _id: number,
        private _description: string
    ){}

    get id(): number{
        return this._id
    }

    get description(){
        return this._description
    }

    //Set JSON object to Challenge object
    static fromJSON(json: any): Challenge{
        const normalUser = new Challenge(
            json.id,
            json.description
        )
        return normalUser;
    }

    //Set Challenge object to JSON object
    toJSON(): any{
        return{
            id: this.id,
            description: this.description
        }
    }
}