import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { JsonService } from './json.service';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  accessAuthorizatioList:any;
  static authorisedData=new BehaviorSubject(null)


  constructor(private json:JsonService,private router: Router,private localStore:StoreService) {
    console.log("this is AccessService")

   }

  setAccessUrl(){
    let acceseUrl:any[]=[]
    let assignRoles:any=this.localStore.getLocalStorageValue('roles');
    this.json.fetch('accessPolicy').subscribe((resp:any)=>{
        resp.forEach((e:any) => {
          e.data.accessBy.forEach((role:any)=>{
              if(assignRoles.includes(role)){
                acceseUrl.push(e.data.url)
              }
          })
        });
      this.localStore.setLocalStorage("acceseUrl",acceseUrl);
    })
  }

  getAuthorization(field:any){
    this.json.fetch('accessPolicy').subscribe((resp:any)=>{
      let list=resp.filter((e:any) =>e.data.name==field);
      if(list && list!=null){
        this.accessAuthorizatioList=list[0].data.children.accessType;
      }
    })
  }

  routeAccessClaim(claimType:any):boolean{
    let roles:any=this.localStore.getLocalStorageValue("roles")?.split(",");
    let assignRoles:any=this.accessAuthorizatioList[claimType].access;
    let check=roles.filter((e:any)=>assignRoles.includes(e));
    if(check && check!=null && check.length>0){
      return true;
    }
    return false;
  }

}
