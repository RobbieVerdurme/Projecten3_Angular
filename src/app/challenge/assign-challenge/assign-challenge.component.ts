import { MessageService } from './../../message.service';
import { ChallengeService } from './../challenge.service';
import { map } from 'rxjs/operators';
import { SelectUserService } from './../select-user.service';
import { Component, OnInit } from '@angular/core';
import { Challenge } from '../Challenge';
import { Category } from '../Category';
import { NormalUser } from 'src/app/user/normal-user/NormalUser';
import { MatListOption } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign-challenge',
  templateUrl: './assign-challenge.component.html',
  styleUrls: ['./assign-challenge.component.css']
})
export class AssignChallengeComponent implements OnInit {

  challenges: Challenge[] = [];

  challengesToAdd: Challenge[] = [];
  pageSize = 10;
  challengesOnCurrentPage: Challenge[] = [];

  user: NormalUser

  submitError: String = null;
  isLoading = false;

  constructor(private router: Router,private selectUserService: SelectUserService,private challengeService: ChallengeService,private messageService: MessageService) { }

  ngOnInit() {
    this.user = this.selectUserService.getSubject().value;
    this.isLoading = true;
    this.challengeService.getChallengesForUserPerCategory(this.user.id).subscribe((response)=>{
      if(response.status === 200){
        this.challenges = response.body
        this.submitError = null;
        this.isLoading = false;
        this.challengesOnCurrentPage = this.challenges.slice(0,this.pageSize);
      }else{
        this.submitError = "Kon de beschikbare uitdagingen niet ophalen";
        this.challenges = null;
        this.challengesOnCurrentPage = [];
        this.isLoading = false;
      }
    },(error)=>{
      this.submitError = "Kon de beschikbare uitdagingen niet ophalen";
      this.challengesOnCurrentPage = [];
      this.challenges = null;
      this.isLoading = false;
      console.log(error);
    });
  }

  onPageChange(e){
    this.challengesOnCurrentPage = this.challenges.slice(e.pageIndex * e.pageSize,(e.pageIndex + 1) * e.pageSize);
  }

  onSelectionChange(e,v){
    this.challengesToAdd = v.map(element => element.value);
  }

  onSubmit(){
    this.submitError = null;
    //Trigger empty selection warning
    if(this.challengesToAdd === null){
      this.challengesToAdd = [];
    }else if(this.challengesToAdd.length === 0){
      return;
    }
    else{
      this.challengeService.assignChallenges(this.user.id,this.challengesToAdd.map(challenge => challenge.id)).subscribe((response)=> {
        if(response.status === 200){
          this.submitError = null;
          //post message and return to detail screen
          this.messageService.setMessage(`Uitdagingen toegewezen aan gebruiker`);
          this.router.navigate(["/gebruiker/id"]);
        }else{
          this.submitError = "Kon de uitdagingen niet toewijzen aan de gebruiker";
        }
      },(error)=>{
        console.log(error);
        this.submitError = "Kon de uitdagingen niet toewijzen aan de gebruiker";
      });
    }
  }

}
