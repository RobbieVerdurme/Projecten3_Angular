import { Category } from './Category';

export class Challenge{
    constructor(
        private _id: number,
        private _title: String,
        private _description: String,
        private _category: Category,
        private _level: number
    ){}

    get id(): number{
        return this._id
    }

    get description(): String{
        return this._description
    }

    get title(): String {
        return this._title;

    }

    get level(): number{
        return this._level;
    }

    //Set JSON object to Challenge object
    static fromJSON(json: any): Challenge{
        return new Challenge(json.challengeId,json.title,json.description,Category.fromJSON(json.category), json.level);
    }

    //Set Challenge object to JSON object
    toJSON(): any{
        return{
            id: this._id,
            title: this._title,
            description: this._description,
            category: this._category.toJSON(),
            level: this._level
        }
    }
}