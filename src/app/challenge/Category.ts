export class Category {

    constructor(private _id: number, private _name: String){}

    static fromJSON(json: any): Category{
        return new Category(json.categoryId,json.name);
    }

    toJSON(): any {
        return {
            categoryId: this._id,
            name: this._name
        }
    }

    get id(): number{
        return this._id;
    }

    get name() : String{
        return this._name;
    }

    set id(id:number){
        this._id = id
    }

    set name(name:String){
        this._name = name
    }

    toJSONForAdd(): any{
        return this.id
    }
}