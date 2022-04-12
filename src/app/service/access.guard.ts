import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Status } from '../model/status';
import { AccessService } from './access.service';
import { JsonService } from './json.service';
import { MessageService } from './message.service';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {

  constructor(private router: Router,private local:StoreService,private message:MessageService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let acceseUrl =this.local.getLocalStorageValue("acceseUrl");
      if(acceseUrl?.split(',').includes("/"+route.url[0].path)){
        return true;
      }
      this.message.veiwMessage("🚫 Sorry,You can not acces this ULR....Please contact to Admin",Status.WARNING)
      this.router.navigate([this.router.url])
      return false;
  }

}
