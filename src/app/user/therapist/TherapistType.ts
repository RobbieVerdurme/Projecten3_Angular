import { Category } from 'src/app/challenge/Category';

export class TherapistType{
    private _categories: Array<Category>
    constructor(
        private _therapistTypeId: number,
        private _type: string,
    ){}

    static fromJSON(json:any): TherapistType{
        return new TherapistType(
            json.therapistTypeId,
            json.type
        )
    }

    get therapistTypeId(): number{
        return this._therapistTypeId
    }

    get type():string{
        return this._type;
    }

    get categories(): Array<Category>{
        return this._categories;
    }

    set categories(cats: Array<Category>){
        this._categories = cats
    }

    toJSON(): any{
        return {
            therapistTypeId: this.therapistTypeId,
        }
    }

    toAddTypeJSON(): any{
        return{
            type: this.type,
            categories: this.categories.map(cat => cat.toJSONForAdd())
        }
    }
}