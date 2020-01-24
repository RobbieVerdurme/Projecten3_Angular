import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from './../../../message.service';
import { Therapist } from '../Therapist';
import { NormalUser } from '../../normal-user/NormalUser';
import { Subject } from 'rxjs';
import { TherapistDataService } from '../therapist-data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-therapist-detail',
  templateUrl: './therapist-detail.component.html',
  styleUrls: ['./therapist-detail.component.css']
})
export class TherapistDetailComponent implements OnInit {

  public therapist: Therapist;
  public errorMsg$: Subject<string> = new Subject<string>();
  public clients: NormalUser[];
  public isLoading$: Subject<boolean> = new Subject<boolean>();


  constructor(
    private route: ActivatedRoute, 
    private _router: Router, 
    private therapistService: TherapistDataService,
    private messageService: MessageService) { 
    }

  ngOnInit() {
    this.route.data.subscribe(item => this.therapist = item['therapist']);
    this.loadClients();
  }

  dismissMessage(){
    this.messageService.setMessage(null);
  }

  editTherapist(id: number): void{
    this._router.navigate([`/therapeut/edit/${id}`])
  }

  loadClients()
  {
    this.isLoading$.next(true);
    this.therapistService.getTherapistClients(this.therapist.id).subscribe(
      response =>
      {
        if(response.status === 200)
        {
          this.therapist.clients = response.body.map((client: any) : NormalUser => NormalUser.FromJSON(client));
        }
        else
        {
          this.errorMsg$.next("Er liep iets fout, de challenges van de user konden niet opgehaald worden.");
        }
      },
      (err: HttpErrorResponse) => {
        this.isLoading$.next(false)
        this.errorMsg$.next(`Er zijn geen cliënten gevonden voor deze therapeut.`);
      }
    )
  }

}
