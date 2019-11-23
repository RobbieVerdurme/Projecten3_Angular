import { map } from 'rxjs/operators';
import { SelectUserService } from './../select-user.service';
import { Component, OnInit } from '@angular/core';
import { Challenge } from '../Challenge';
import { Category } from '../Category';
import { NormalUser } from 'src/app/user/normal-user/NormalUser';
import { MatListOption } from '@angular/material';

@Component({
  selector: 'app-assign-challenge',
  templateUrl: './assign-challenge.component.html',
  styleUrls: ['./assign-challenge.component.css']
})
export class AssignChallengeComponent implements OnInit {

  challenges: Challenge[] = [
    new Challenge(1,"Challenge 1","Challenge 1 Description",new Category(1,"Category 1")),
    new Challenge(1,"Challenge 1","Challenge 1 Description",new Category(1,"Category 1")),
    new Challenge(1,"Challenge 1","Challenge 1 Description",new Category(1,"Category 1")),
    new Challenge(1,"Challenge 1","Challenge 1 Description",new Category(1,"Category 1")),
    new Challenge(1,"Challenge 1","Challenge 1 Description",new Category(1,"Category 1")),
    new Challenge(1,"Challenge 1","Challenge 1 Description",new Category(1,"Category 1")),
    new Challenge(1,"Challenge 1","Challenge 1 Description",new Category(1,"Category 1")),
    new Challenge(1,"Challenge 1","Challenge 1 Description",new Category(1,"Category 1")),
    new Challenge(1,"Challenge 1","Challenge 1 Description",new Category(1,"Category 1")),
    new Challenge(1,"Challenge 1","Challenge 1 Description",new Category(1,"Category 1")),
    new Challenge(1,"Challenge 1","Challenge 1 Description",new Category(1,"Category 1")),
    new Challenge(1,"Challenge 1","Challenge 1 Description",new Category(1,"Category 1")),
    new Challenge(1,"Challenge 1","Challenge 1 Description",new Category(1,"Category 1")),
    new Challenge(1,"Challenge 1","Challenge 1 Description",new Category(1,"Category 1")),
    new Challenge(1,"Challenge 1","Challenge 1 Description",new Category(1,"Category 1")),
  ];

  challengesToAdd: Challenge[] = [];
  pageSize = 10;
  challengesOnCurrentPage = [];

  user: NormalUser

  constructor(private selectUserService: SelectUserService) { }

  ngOnInit() {
    this.user = this.selectUserService.getSubject().value;
    this.challengesOnCurrentPage = this.challenges.slice(0,this.pageSize);
  }

  onPageChange(e){
    this.challengesOnCurrentPage = this.challenges.slice(e.pageIndex * e.pageSize,(e.pageIndex + 1) * e.pageSize);
  }

  onSelectionChange(e,v){
    console.log("selected item");
    this.challengesToAdd = v.map(element => element.value);
  }

}
