import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from './../../../message.service';
import { Therapist } from '../Therapist';

@Component({
  selector: 'app-therapist-detail',
  templateUrl: './therapist-detail.component.html',
  styleUrls: ['./therapist-detail.component.css']
})
export class TherapistDetailComponent implements OnInit {

  public therapist: Therapist;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private messageService: MessageService) { 
    }

  ngOnInit() {
    this.route.data.subscribe(item => this.therapist = item['therapist'])
  }

  dismissMessage(){
    this.messageService.setMessage(null);
  }

}
