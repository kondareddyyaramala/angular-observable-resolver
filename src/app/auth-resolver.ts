import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, timer, of } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable()
export class AuthResolver implements Resolve<boolean> {
    resolve(route: ActivatedRouteSnapshot): Observable<boolean> {

        // emits an obs after 2 seconds
        let obs = timer(2000);

        // It waits till the Obs gets resolved and then routes the user to the new
        // route
        // In real time it would be an service call
        return obs.pipe(take(1), map(v => true));
    }
}