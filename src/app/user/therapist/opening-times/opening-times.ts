export class OpeningTimes{
    constructor(
        private _openingTimesId: number,
        private _interval: string
    ){}

    //Getters
    get OpeningTimesId(): number{
        return this._openingTimesId
    }

    get Interval(): string{
        return this._interval;
    }

    static FromJSON(json: any): OpeningTimes{
        const ot = new OpeningTimes(
            json.OpeningTimes,
            json.Interval
        );
        return ot;
    }
}