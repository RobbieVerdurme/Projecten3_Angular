import { Challenge } from 'src/app/challenge/Challenge';
import { Category } from 'src/app/challenge/Category';

export class NormalUser{
    //Constructor
    private _categories = new Array<Category>();
    private _challenges = new Array<Challenge>();
    private _xp: number;
    constructor(
        private _id: number,
        private _firstname: string,
        private _lastname: string,
        private _email: string,
        private _telephone: string,
        private _contract: Date
    ){}

    //Getters
    get id(): number{
        return this._id;
    }

    get firstname(): string{
        return this._firstname;
    }

    get lastname(): string{
        return this._lastname;
    }

    get email(): string{
        return this._email
    }

    get telephone(): string{
        return this._telephone
    }

    get contract(): Date{
        return this._contract
    }

    get xp(): number{
        return this._xp;
    }

    set xp(xp: number){
        this._xp = xp;
    }

    get challenges(): Challenge[]{
        return this._challenges
    }

    set challenges(chal: Challenge[]){
        this._challenges = chal;
    }

    get categories(): Category[]{
        return this._categories;
    }

    set categories(cat: Category[]){
        this._categories = cat;
    }

    //Set JSON object to NormalUser object
    static FromJSON(json: any): NormalUser{
        const normalUser = new NormalUser(
            json.userId,
            json.firstName,
            json.familyName,
            json.email,
            json.phone,
            json.contract
        )
        normalUser.xp = json.experiencePoints;
        normalUser.categories = json.categories.map(Category.fromJSON);
        //normalUser.challenges = json.challenges.map(Challenge.fromJSON);
        return normalUser;
    }

    //Set NormalUser object to JSON object
    toJSON(): any{
        return{
            userId: this.id,
            firstname: this.firstname,
            familyName: this.lastname,
            email: this.email,
            phone: this.telephone,
            contract: this.contract,
            categories: this._categories,
            challenges: this.challenges.map(ch => ch.toJSON())
        }
    }

    addChallenge(challenge: Challenge) {
        this._challenges.push(challenge);
    }
}