import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from '../Challenge';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {
  @Input() public challenge: Challenge;
  constructor() { }

  ngOnInit() {
  }

}
