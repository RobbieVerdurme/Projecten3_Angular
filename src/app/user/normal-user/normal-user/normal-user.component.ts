import { Component, OnInit, Input } from '@angular/core';
import { NormalUser } from '../NormalUser';

@Component({
  selector: 'app-normal-user',
  templateUrl: './normal-user.component.html',
  styleUrls: ['./normal-user.component.css']
})
export class NormalUserComponent implements OnInit {
  @Input() public normalUser: NormalUser
  constructor() { }

  ngOnInit() {
  }

}
