import { MessageService } from './../../message.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Category } from './../Category';
import { MatTableDataSource } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { ChallengeService } from '../challenge.service';
import { Observable, Subject, pipe } from 'rxjs';
import { Challenge } from '../Challenge';
import { map } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-add-challenge',
  templateUrl: './add-challenge.component.html',
  styleUrls: ['./add-challenge.component.css']
})
export class AddChallengeComponent implements OnInit {

  public challengeForm: FormGroup;
  dataSource: MatTableDataSource<Category>;
  private categories$: Observable<Category[]> = this.categoryService.categories$;
  private errorMessage$: Observable<string> = this.categoryService.loadingError$;
  public succesMessage: string;

  selectedCategory: Category = null;
  selectedCategoryId: number = 0;

  public isLoading$: Subject<boolean> = new Subject<boolean>();
  public submitError$ = new Subject<string>();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private challengeService: ChallengeService,
    private _messageService: MessageService
    ) {}

  ngOnInit() {
    this.isLoading$.next(false);
    this.challengeForm = this.fb.group({
      title: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      level: ['', [Validators.required]]
    });
  }

  onSubmit(){
    if(this.challengeForm.errors === null)
      {
        this.isLoading$.next(true);
        this.challengeService.addChallenge(this.challenge).subscribe(response => {
          if(response.status === 200){
            this.submitError$ = new Subject<string>();
            this.succesMessage = "Challenge succesvol toegevoegd";
            this.ngOnInit();
          }
          else if(response.status === 404)
          {
            this.isLoading$.next(false);
            this.submitError$.next("Deze categorie bestaat niet. Gelieve een andere categorie te kiezen.");
          }
          else if(response.status === 303)
          { 
            this.isLoading$.next(false);
            this.submitError$.next("Deze uitdaging bestaat al!");
          }
          else{
            this.isLoading$.next(false);
            this.submitError$.next("Er liep iets fout! De uitdaging is niet toegevoegd.");
          }
        },(error)=>{
          this.submitError$.next("Kon de Uitdaging niet opslaan"); 
        });

      }
      else
      {
        this._messageService.setMessage("Gelieve alle benodigde info op te geven!");
      }
  }

  get TitleField() : FormControl
  {
    return <FormControl> this.challengeForm.get("title");
  }

  get DescriptionField() : FormControl
  {
    return <FormControl> this.challengeForm.get("description");
  }

  get ImageField(): FormControl
  {
    return <FormControl> this.challengeForm.get("image");
  }

  get LevelField(): FormControl
  {
    return <FormControl> this.challengeForm.get("level");
  }

  get CategoryField(): FormControl
  {
    return <FormControl> this.challengeForm.get('category');
  }

  get challenge()
  {
    return new Challenge(0, this.TitleField.value, this.DescriptionField.value, this.selectedCategory, this.LevelField.value);
  }
}
