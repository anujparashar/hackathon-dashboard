import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GetFeatureService {
    loggedInUserFeatures: string[] = [];
    constructor() { }

    setLoggedInUserFeatures(features: string[]){
        this.loggedInUserFeatures = features;
    }

    getLoggedInUserFeatures(){
        return this.loggedInUserFeatures;
    }

    getUserFeatureAccess(feature: string) {
        return this.getLoggedInUserFeatures().includes(feature);
    }
}

