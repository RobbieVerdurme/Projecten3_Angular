import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageObservable: BehaviorSubject<String> = new BehaviorSubject(null);

  constructor() { }

  setMessage(message: String){
    this.messageObservable.next(message);
  }

  getObservable(){
    return this.messageObservable;
  }
}
