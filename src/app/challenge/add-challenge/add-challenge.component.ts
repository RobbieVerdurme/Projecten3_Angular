import { MatTableDataSource } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-challenge',
  templateUrl: './add-challenge.component.html',
  styleUrls: ['./add-challenge.component.css']
})
export class AddChallengeComponent implements OnInit {

  public inputForm: FormGroup;
  dataSource: MatTableDataSource<string>;

  constructor(private router: Router,private fb: FormBuilder) { 
    this.dataSource = new MatTableDataSource(["Category 1","Category 2"]);
  }

  ngOnInit() {
    this.inputForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
    //TODO fetch categories for list
  }

  onSubmit(){
    //TODO: validate form input AND if category isn't null
  }

  selectCategory(category) {
    //TODO set category
  }

}
