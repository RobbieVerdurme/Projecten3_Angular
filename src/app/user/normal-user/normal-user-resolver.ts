import { NormalUser } from './NormalUser';
import { NormalUserDataService } from './normal-user-data.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NormalUserResolver implements Resolve<NormalUser>{
    constructor(private normalUserDataService: NormalUserDataService){}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<NormalUser>{
        return this.normalUserDataService.getNormalUser$(route.params['id']);
    }
}