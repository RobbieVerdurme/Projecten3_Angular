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

    set Interval(interval: string){
        this._interval = interval
    }

    static FromJSON(json: any): OpeningTimes{
        const ot = new OpeningTimes(
            json.interval
        );
        ot.OpeningTimesId = json.openingTimesId
        return ot;
    }

    toJSON(): any{
        return {
            openingTimesId: this.OpeningTimesId,
            interval: this.Interval
        }
    }
}