import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GetFeatureService } from '../shell-serivces/get-feature.service';

@Injectable({
    providedIn: 'root'
})
export class ManageChallengeFeatureGuard implements CanActivate {
    constructor(private getFeatureService: GetFeatureService) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.getFeatureService.getUserFeatureAccess('manage-challenges');
    }

}
