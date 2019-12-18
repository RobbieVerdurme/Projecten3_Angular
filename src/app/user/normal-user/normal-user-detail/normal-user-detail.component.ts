import { MessageService } from './../../../message.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Challenge } from 'src/app/challenge/Challenge';
import { NormalUser } from '../NormalUser';
import { Category } from 'src/app/challenge/Category';
import { SelectUserService } from 'src/app/challenge/select-user.service';
import { ChallengeService } from 'src/app/challenge/challenge.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-normal-user-detail',
  templateUrl: './normal-user-detail.component.html',
  styleUrls: ['./normal-user-detail.component.css']
})
export class NormalUserDetailComponent implements OnInit {
//var
  public user : NormalUser;
  constructor(private challengeService: ChallengeService, private route: ActivatedRoute, private router: Router, private messageService: MessageService, private selectUserService: SelectUserService) { 
  }

  ngOnInit() {
    this.LoadUser()
  }

  navigateToAssignChallenges(){
    this.router.navigate(["/challenge/assign"]);
  }

  dismissMessage(){
    this.messageService.setMessage(null);
  }

  async LoadUser(){
    this.route.data.subscribe(item => this.user = item['user'])
  }

  editUser(id: number): void{
    this.router.navigate([`/gebruiker/edit/${id}`])
  }
}
