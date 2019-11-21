import { Category } from './Category';

export class Challenge{
    constructor(
        private _id: number,
        private _title: String,
        private _description: String,
        private _category: Category
    ){}

    get id(): number{
        return this._id
    }

    get description(){
        return this._description
    }

    get title(){
        return this._title
    }

    //Set JSON object to Challenge object
    static fromJSON(json: any): Challenge{
        return new Challenge(json.id,json.title,json.description,Category.fromJSON(json.category));
    }

    //Set Challenge object to JSON object
    toJSON(): any{
        return{
            id: this.id,
            description: this.description,
            title: this._title,
            category: this._category.toJSON(),
        }
    }
}