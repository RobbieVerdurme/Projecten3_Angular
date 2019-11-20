import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Company } from './company';
import { CompanyDataService } from './company-data.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CompanyResolver implements Resolve<Company>{
    constructor(private companyDataService: CompanyDataService){}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Company>{
        return this.companyDataService.getCompany$(route.params['id']);
    }
}