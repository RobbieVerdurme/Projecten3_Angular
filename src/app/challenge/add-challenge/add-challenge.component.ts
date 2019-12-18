import { MessageService } from './../../message.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Category } from './../Category';
import { MatTableDataSource } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { ChallengeService } from '../challenge.service';
import { Observable } from 'rxjs';
import { Challenge } from '../Challenge';


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
  private displayedColumns: string[] = ['name'];

  selectedCategory: Category = null;
  selectedCategoryId: number = 0;

  isLoading: boolean = false;
  submitError: string = null;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private challengeService: ChallengeService,
    private messageService: MessageService
    ) {}

  ngOnInit() {
    this.challengeForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: [''],
      level: ['', [Validators.required]]
    });
  }

  onSubmit(){
    if(this.challengeForm.errors === null)
      {
        this.challengeService.addChallenge(this.challenge).subscribe(response => {
          if(response.status === 200){
            this.submitError = null;
            this.messageService.setMessage(`Uitdaging '${this.TitleField.value}' toegevoegd`);
          }else{
            this.submitError = "Kon de Uitdaging niet opslaan";
          }
        },(error)=>{
          console.log(error);
          this.submitError = "Kon de Uitdaging niet opslaan";
        });

      }
      else
      {
        this.messageService.setMessage("Gelieve alle benodigde info op te geven!");
      }
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.selectedCategoryId = category.id;
  }

  isSelected(element: Category): boolean {
    return element.id === this.selectedCategoryId;
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

  get challenge()
  {
    return new Challenge(0, this.TitleField.value, this.DescriptionField.value, this.selectedCategory, this.LevelField.value);
  }
}
