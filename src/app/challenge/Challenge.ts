import { Category } from './Category';

export class Challenge{
    constructor(
        private _id: number,
        private _description: string,
        private _category: Category,
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
            json.description,
            Category.fromJSON(json.category)
        )
        return normalUser;
    }

    //Set Challenge object to JSON object
    toJSON(): any{
        return{
            id: this._id,
            description: this._description,
            category: this._category.toJSON()
        }
    }
}