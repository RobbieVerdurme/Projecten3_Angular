export class Result {
//var
    private _id: number

  //constructor
  constructor(
    private _image: string,
    private _title: string,
    private _description
  ) {}

  //methods
  toJSON(): any {
    return {
      image: this._image,
      title: this._title,
      description: this._description
    };
  }

    //get result from jsonfile
    static fromJSON(json: any): Result {
        const result = new Result(
          json.img,
          json.title,
          json.description,
        );
        return result;
      }

  //getters
  get image() {
    return this._image;
  }

  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }
}
