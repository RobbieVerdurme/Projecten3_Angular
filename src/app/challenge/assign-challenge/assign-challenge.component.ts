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
  public errorMsg: string;

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
      .subscribe(
        response => {
          if(response.status === 200){
          }
          else{
            this.errorMsg = 'Er zijn geen uitdagingen gevonden voor deze combinatie'
          }
        },
        (err: HttpErrorResponse) => {
          if(err.error instanceof Error){
            this.errorMsg = `Er zijn geen uitdagingen gevonden voor deze combinatie`
          }else{
            this.errorMsg = `Er zijn geen uitdagingen gevonden voor deze combinatie`
          }
        }
        ) 
    }
  }
}
