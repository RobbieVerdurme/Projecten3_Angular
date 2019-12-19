import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CategoryService } from '../challenge/category.service';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.css']
})
export class CategoryDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private service:CategoryService) {}

  onClick(): void {
    this.service.addNewCategory(this.data).subscribe();
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
