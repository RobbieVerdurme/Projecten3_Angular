import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TherapistDataService } from '../therapist-data.service';
import { TherapistType } from '../TherapistType';
import { Category } from 'src/app/challenge/Category';
import { CategoryService } from 'src/app/challenge/category.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Therapist } from '../Therapist';

export interface ITherapistType{
  type: string,
  category: Array<Category>
}

@Component({
  selector: 'app-therapist-type-dialog',
  templateUrl: './therapist-type-dialog.component.html',
  styleUrls: ['./therapist-type-dialog.component.css']
})
export class TherapistTypeDialogComponent implements OnInit {
  public categories$: Observable<Category[]> = this._categoryDataService.categories$
  public errorMsg: string
  categories = new FormControl();

  constructor(
    public dialogRef: MatDialogRef<TherapistTypeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITherapistType,
    private service:TherapistDataService,
    public _categoryDataService: CategoryService) {}

  onClick(): void {
    if(this.categories.value !== null){
      var therapistType = new TherapistType(0, this.data.type)
    therapistType.categories = this.categories.value
    this.service.addNewTherapistType(therapistType).subscribe(
      response => {
        if(response.status === 200){
          this.dialogRef.close();
        }
        else{
          this.errorMsg = 'Fout bij aanmaken type!'
        }
      }
    )
    }
    else{
      this.errorMsg = 'Geen categorie geselecteerd!'
    }
  }

  ngOnInit() {
  }

}
