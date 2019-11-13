import { Component, OnInit } from '@angular/core';
import { Challenge } from 'src/app/challenge/Challenge';
import { NormalUser } from '../NormalUser';


const us: NormalUser = new NormalUser(0, "wazzaaaa97", "Ruben", "Grillaert", "ruben.grillaert.y1033@student.hogent.be", "+32474139526", new Date());
us.addChallenge(new Challenge(0, "Loop 10km"));
us.addChallenge(new Challenge(0, "Maak een speciale gezonde maaltijd"))
us.addChallenge(new Challenge(0, "Doe een daguitstap en neem eigen middagmaal mee"))

@Component({
  selector: 'app-normal-user-detail',
  templateUrl: './normal-user-detail.component.html',
  styleUrls: ['./normal-user-detail.component.css']
})
export class NormalUserDetailComponent implements OnInit {
//var
user: NormalUser = us;

  constructor() { }

  ngOnInit() {
  }

}
