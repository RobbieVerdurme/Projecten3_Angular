import { MessageService } from './../../message.service';
import { ChallengeService } from './../challenge.service';
import { map, catchError } from 'rxjs/operators';
import { SelectUserService } from './../select-user.service';
import { Component, OnInit } from '@angular/core';
import { Challenge } from '../Challenge';
import { Category } from '../Category';
import { NormalUser } from 'src/app/user/normal-user/NormalUser';
import { CategoryService } from '../category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NumberValueAccessor, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, pipe } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-assign-challenge',
  templateUrl: './assign-challenge.component.html',
  styleUrls: ['./assign-challenge.component.css']
})
export class AssignChallengeComponent implements OnInit {

  public categoryAndLevelForm: FormGroup;
  private categories$: Observable<Category[]> = this.categoryService.categories$;
  private challenges$: Observable<Challenge[]>;

  selectedCategory: Category = null;
  selectedLevel: number= 0;

  user: NormalUser
 

  submitError: String = null;
  isLoading = false;

  constructor(
    private _router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private _challengeService: ChallengeService,
    private categoryService: CategoryService,
    private _messageService: MessageService) { }

  ngOnInit() {
    this.route.data.subscribe(item => this.user = item['user']);
    this.categoryAndLevelForm = this.fb.group({
      category: ['', [Validators.required]],
      level: ['', [Validators.required]]
    })
  }

  onSubmit(){
    this.isLoading = true;
    if(this.categoryAndLevelForm.errors === null)
    {
      this._challengeService.getChallengesForCategoryAndLevel(this.selectedCategory.id, this.selectedLevel)
      .subscribe(response =>{
        this.isLoading = false;
        if(response.status === 200)
        {
        }
        else if(response.status === 400)
        {
          this.submitError = "Er zijn geen challenges gevonden voor deze combinatie!";
        }
        else{
          this.submitError = "Er is iets misgelopen! Probeer later opnieuw.";
        }
      });
      //   if(response.status === 200)
      //   {
      //     this.isLoading = false;
      //     this._router.navigateByUrl(`user/detail/${this.user.id}`);
      //   }
      //   else if(response.status === 400)
      //   {
      //     this.isLoading = false;
      //     this.submitError = "Er zijn geen uitdagingen voor deze categorie en niveau! Probeer een andere combinatie.";
      //   }
      //   else
      //   {
      //     this.isLoading = false;
      //     this.submitError = "Er ging iets mis! Probeer later opnieuw.";
      //   }
      // })
    }
  }
}
