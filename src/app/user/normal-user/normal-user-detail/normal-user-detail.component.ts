import { MessageService } from './../../../message.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Challenge } from 'src/app/challenge/Challenge';
import { NormalUser } from '../NormalUser';
import { Category } from 'src/app/challenge/Category';
import { SelectUserService } from 'src/app/challenge/select-user.service';
import { ChallengeService } from 'src/app/challenge/challenge.service';
import { Observable, Subject } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-normal-user-detail',
  templateUrl: './normal-user-detail.component.html',
  styleUrls: ['./normal-user-detail.component.css']
})
export class NormalUserDetailComponent implements OnInit {
//var
  public user : NormalUser;

  public challenges: Challenge[];
  public errorMsg$: Subject<string> = new Subject<string>();
  public isLoading$: Subject<boolean> = new Subject<boolean>();
  constructor(private challengeService: ChallengeService, private route: ActivatedRoute, private router: Router, private messageService: MessageService, private selectUserService: SelectUserService) { 
  }

  ngOnInit() {
    this.isLoading$.next(false);
    this.LoadUser()
    this.loadChallenges();
  }

  navigateToAssignChallenges(){
    this.router.navigate([`/challenge/assign/${this.user.id}`]);
  }

  dismissMessage(){
    this.messageService.setMessage(null);
  }

  async LoadUser(){
    this.route.data.subscribe(item => this.user = item['user'])
  }

  loadChallenges()
  {
    this.isLoading$.next(true);
    this.challengeService.getChallengesForUser(this.user.id).subscribe(
      response =>
      {
        if(response.status === 200)
        {
          this.challenges = response.body.map((challengeUser: any) : Challenge => Challenge.fromJSONChallengeUser(challengeUser));
          console.log("Geslaagd");
        }
        else
        {
          this.errorMsg$.next("Er liep iets fout, de challenges van de user konden niet opgehaald worden.");
        }
      },
      (err: HttpErrorResponse) => {
        this.isLoading$.next(false)
        if(err.error instanceof Error){
          this.errorMsg$.next(`Er zijn geen uitdagingen gevonden voor deze combinatie`);
        }else{
          this.errorMsg$.next(`Er zijn geen uitdagingen gevonden voor deze combinatie`);
        }
      }
    )
  }
  
  editUser(id: number): void{
    this.router.navigate([`/gebruiker/edit/${id}`])
  }
}
