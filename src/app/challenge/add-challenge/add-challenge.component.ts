import { MessageService } from './../../message.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Category } from './../Category';
import { MatTableDataSource } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { ChallengeService } from '../challenge.service';

@Component({
  selector: 'app-add-challenge',
  templateUrl: './add-challenge.component.html',
  styleUrls: ['./add-challenge.component.css']
})
export class AddChallengeComponent implements OnInit {

  public inputForm: FormGroup;
  dataSource: MatTableDataSource<Category>;
  displayedColumns: string[] = ['name'];

  selectedCategory: Category = null;
  selectedCategoryId: number = 0;

  isLoading: boolean = false;
  submitError: string = null;

  constructor(private router: Router,private fb: FormBuilder,private categoryService: CategoryService,private challengeService: ChallengeService,private messageService: MessageService) {}

  ngOnInit() {
    this.inputForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
    this.isLoading = true;
    this.categoryService.getCategories().subscribe(response => {
      if(response.status === 200){
        this.dataSource = new MatTableDataSource(response.body);
        this.submitError = null;
        this.isLoading = false;
      }else{
        this.submitError = "Kon de Catergorieën niet ophalen";
        this.isLoading = false;
      }
    },(error)=>{
      console.log(error);
      this.submitError = "Kon de Catergorieën niet ophalen";
      this.isLoading = false;
    });
  }

  onSubmit(){
    if(this.selectedCategory !== null && !this.TitleField.hasError && !this.DescriptionField.hasError){
      this.challengeService.addChallenge(this.TitleField.value,this.DescriptionField.value, this.selectedCategory).subscribe(response => {
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
    return <FormControl> this.inputForm.get("title");
  }

  get DescriptionField() : FormControl
  {
    return <FormControl> this.inputForm.get("description");
  }

}
