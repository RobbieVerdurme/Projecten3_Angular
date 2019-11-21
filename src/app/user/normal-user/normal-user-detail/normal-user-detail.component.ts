import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Challenge } from 'src/app/challenge/Challenge';
import { NormalUser } from '../NormalUser';
import { SelectUserService } from 'src/app/challenge/select-user.service';


@Component({
  selector: 'app-normal-user-detail',
  templateUrl: './normal-user-detail.component.html',
  styleUrls: ['./normal-user-detail.component.css']
})
export class NormalUserDetailComponent implements OnInit {
//var
  user : NormalUser;

  constructor(private router: Router, private selectUserService: SelectUserService) { 
  }

  ngOnInit() {
    this.user = this.selectUserService.getSubject().value;
  }

  navigateToAssignChallenges(){
    this.router.navigate(["/challenge/assign"]);
  }
}
