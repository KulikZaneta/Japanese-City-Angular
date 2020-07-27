import { UserState } from './../../public/state/user.state';
import { Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public store: Store, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log(route.data)
    if (this.store.selectSnapshot(UserState.jwtToken)) {
      if(route.data.role) {
        if(this.store.selectSnapshot(UserState.currentUser).roles.includes(route.data.role)) {
          return true
        }
      } else {
        return true
      }
    } 
    console.log("no access")
    this.router.navigate(['/user'])
    return false
  }
}
