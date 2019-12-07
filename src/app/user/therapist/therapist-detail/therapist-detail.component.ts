import { Component, OnInit } from '@angular/core';
import { Therapist } from '../Therapist';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-therapist-detail',
  templateUrl: './therapist-detail.component.html',
  styleUrls: ['./therapist-detail.component.css']
})
export class TherapistDetailComponent implements OnInit {

  private therapist: Therapist;
  constructor(private route: ActivatedRoute, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.route.data.subscribe(item => this.therapist = item['therapist']);
  }

}
