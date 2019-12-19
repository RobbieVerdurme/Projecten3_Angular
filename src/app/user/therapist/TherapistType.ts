export class TherapistType{
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

    toJSON(): any{
        return {
            therapistTypeId: this.therapistTypeId
        }
    }
}