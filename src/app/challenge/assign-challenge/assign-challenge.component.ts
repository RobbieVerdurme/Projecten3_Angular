import { Component, OnInit } from '@angular/core';
import { Challenge } from '../Challenge';
import { Category } from '../Category';
import { NormalUser } from 'src/app/user/normal-user/NormalUser';

@Component({
  selector: 'app-assign-challenge',
  templateUrl: './assign-challenge.component.html',
  styleUrls: ['./assign-challenge.component.css']
})
export class AssignChallengeComponent implements OnInit {

  challenges: Challenge[] = [new Challenge(1,"Challenge 1","Challenge 1 Description",new Category(1,"Category 1"))];

  user: NormalUser

  constructor() { }

  ngOnInit() {
    this.user = history.state.data
  }

}
