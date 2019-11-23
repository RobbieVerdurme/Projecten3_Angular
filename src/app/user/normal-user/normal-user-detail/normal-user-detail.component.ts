import { Component, OnInit, ViewChild } from '@angular/core';
import { Challenge } from 'src/app/challenge/Challenge';
import { NormalUser } from '../NormalUser';
import { Category } from 'src/app/challenge/Category';


const us: NormalUser = new NormalUser(0, "wazzaaaa97", "Ruben", "Grillaert", "ruben.grillaert.y1033@student.hogent.be", "+32474139526", new Date());
us.addChallenge(new Challenge(0, "Loop 10km",new Category(1,"Sport")));
us.addChallenge(new Challenge(0, "Maak een speciale gezonde maaltijd",new Category(2,"Eten")));
us.addChallenge(new Challenge(0, "Doe een daguitstap en neem eigen middagmaal mee",new Category(3,"Recreatie")));
us.addChallenge(new Challenge(0, "Loop 10km",new Category(1,"Sport")));
us.addChallenge(new Challenge(0, "Maak een speciale gezonde maaltijd",new Category(2,"Eten")));
us.addChallenge(new Challenge(0, "Doe een daguitstap en neem eigen middagmaal mee",new Category(3,"Recreatie")));
us.addChallenge(new Challenge(0, "Loop 10km",new Category(1,"Sport")));
us.addChallenge(new Challenge(0, "Maak een speciale gezonde maaltijd",new Category(2,"Eten")));
us.addChallenge(new Challenge(0, "Doe een daguitstap en neem eigen middagmaal mee",new Category(3,"Recreatie")));
us.addChallenge(new Challenge(0, "Loop 10km",new Category(1,"Sport")));
us.addChallenge(new Challenge(0, "Maak een speciale gezonde maaltijd",new Category(2,"Eten")));
us.addChallenge(new Challenge(0, "Doe een daguitstap en neem eigen middagmaal mee",new Category(3,"Recreatie")));
us.addChallenge(new Challenge(0, "Loop 10km",new Category(1,"Sport")));
us.addChallenge(new Challenge(0, "Maak een speciale gezonde maaltijd",new Category(2,"Eten")));
us.addChallenge(new Challenge(0, "Doe een daguitstap en neem eigen middagmaal mee",new Category(3,"Recreatie")));
us.addChallenge(new Challenge(0, "Loop 10km",new Category(1,"Sport")));
us.addChallenge(new Challenge(0, "Maak een speciale gezonde maaltijd",new Category(2,"Eten")));
us.addChallenge(new Challenge(0, "Doe een daguitstap en neem eigen middagmaal mee",new Category(3,"Recreatie")));



@Component({
  selector: 'app-normal-user-detail',
  templateUrl: './normal-user-detail.component.html',
  styleUrls: ['./normal-user-detail.component.css']
})
export class NormalUserDetailComponent implements OnInit {
//var
user : NormalUser = us;
challenges : Challenge[] = us.challenges;


  constructor() { 
  }

  ngOnInit() {
  }
}
