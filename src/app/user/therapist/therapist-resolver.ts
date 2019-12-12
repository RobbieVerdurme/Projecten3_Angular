import { Therapist } from './Therapist';
import { Injectable } from '@angular/core';
import { TherapistDataService } from './therapist-data.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Company } from 'src/app/company/company';

@Injectable({
    providedIn: 'root'
})
export class TherapistResolver implements Resolve<Therapist>{
    constructor(private therapistDataService: TherapistDataService){}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Therapist>{
        return this.therapistDataService.getTherapist$(route.params['id']);
    }
}