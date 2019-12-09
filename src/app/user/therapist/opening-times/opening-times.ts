export class OpeningTimes{
    private _openingTimesId: number
    constructor(
        private _interval: string
    ){}

    //Getters
    get OpeningTimesId(): number{
        return this._openingTimesId
    }
    set OpeningTimesId(id: number){
        this._openingTimesId = id;
    }

    get Interval(): string{
        return this._interval;
    }

    static FromJSON(json: any): OpeningTimes{
        const ot = new OpeningTimes(
            json.Interval
        );
        ot.OpeningTimesId = json.OpeningTimesId
        return ot;
    }
}