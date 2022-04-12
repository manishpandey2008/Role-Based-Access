import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccessService } from './access.service';
import { JsonService } from './json.service';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {

  constructor(private accessService:AccessService,private router: Router,private json:JsonService,private local:StoreService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let acceseUrl =this.local.getLocalStorageValue("acceseUrl");
      if(acceseUrl?.split(',').includes("/"+route.url[0].path)){
        return true;
      }
      alert("You are not access this..................");
      this.router.navigate([this.router.url])
      return false;
  }

}
