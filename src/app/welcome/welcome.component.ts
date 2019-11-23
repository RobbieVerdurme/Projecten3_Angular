import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../user/authentication.service';
import { Role } from '../user/role';
import { LoginUser } from '../user/loginuser';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  loggedInUser$ = this._authenticationService.user$.value;

  message: String = null;

  constructor(
    private _authenticationService: AuthenticationService, private messageService: MessageService
    ) { }

  ngOnInit() {
    this.messageService.getObservable().subscribe(value => this.message = value);
  }

  dismissMessage(){
    this.messageService.setMessage(null);
  }

}
