import { MessageService } from './../../../message.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Challenge } from 'src/app/challenge/Challenge';
import { NormalUser } from '../NormalUser';
import { Category } from 'src/app/challenge/Category';
import { SelectUserService } from 'src/app/challenge/select-user.service';

const us: NormalUser = new NormalUser(0, "Ruben", "Grillaert", "ruben.grillaert.y1033@student.hogent.be", "+32474139526", new Date());
us.addChallenge(new Challenge(0, "Loop 10km","Loop een afstand van 10 kilometer",new Category(1,"Sport")));
us.addChallenge(new Challenge(0,"Speciale Maaltijd", "Maak een speciale gezonde maaltijd",new Category(2,"Eten")));
us.addChallenge(new Challenge(0,"Daguitstap", "Doe een daguitstap en neem eigen middagmaal mee",new Category(3,"Recreatie")));
us.addChallenge(new Challenge(0, "Loop 10km","Loop een afstand van 10 kilometer",new Category(1,"Sport")));
us.addChallenge(new Challenge(0,"Speciale Maaltijd", "Maak een speciale gezonde maaltijd",new Category(2,"Eten")));
us.addChallenge(new Challenge(0,"Daguitstap", "Doe een daguitstap en neem eigen middagmaal mee",new Category(3,"Recreatie")));
us.addChallenge(new Challenge(0, "Loop 10km","Loop een afstand van 10 kilometer",new Category(1,"Sport")));
us.addChallenge(new Challenge(0,"Speciale Maaltijd", "Maak een speciale gezonde maaltijd",new Category(2,"Eten")));
us.addChallenge(new Challenge(0,"Daguitstap", "Doe een daguitstap en neem eigen middagmaal mee",new Category(3,"Recreatie")));

@Component({
  selector: 'app-normal-user-detail',
  templateUrl: './normal-user-detail.component.html',
  styleUrls: ['./normal-user-detail.component.css']
})
export class NormalUserDetailComponent implements OnInit {
//var
  user : NormalUser;
  message: String;

  constructor(private router: Router,private messageService: MessageService, private selectUserService: SelectUserService) { 
  }

  ngOnInit() {
    this.user = this.selectUserService.getSubject().value;
    this.message = this.messageService.getObservable().value;
  }

  navigateToAssignChallenges(){
    this.router.navigate(["/challenge/assign"]);
  }

  dismissMessage(){
    this.messageService.setMessage(null);
  }
}
