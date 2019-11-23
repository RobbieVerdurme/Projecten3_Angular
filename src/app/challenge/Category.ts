export class Category {
    constructor(
        private _id: number,
        private _name: String
    ){}

    get id(): number{
        return this._id;
    }

    get name() : String{
        return this._name;
    }

    static fromJSON(json: any){
        return new Category(json.categoryId,json.name);
    }

    toJSON(){
        return {
            categoryId: this._id,
            name: this._name
        }
    }
}