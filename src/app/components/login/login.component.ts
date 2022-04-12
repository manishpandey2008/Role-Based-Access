import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/model/user';
import { AccessService } from 'src/app/service/access.service';
import { JsonService } from 'src/app/service/json.service';
import { StoreService } from 'src/app/service/store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() validStatus=new EventEmitter;

  allUsers!:user[];
  isValid=false;
  constructor(private json:JsonService,private localStore:StoreService,private router:Router,
    private access:AccessService) { }

  ngOnInit(): void {
    this.localStore.removeLocalStorageValue("roles");
    this.localStore.removeLocalStorageValue("username");
    this.getData();
  }
  getData(){
    this.json.fetch("user").subscribe((resp:any)=>{
      this.allUsers=resp
    })
  }
  login(user:user){
      this.localStore.setLocalStorage("roles",user.roles)
      this.localStore.setLocalStorage("username",user.username)
      this.localStore.setLocalStorage("name",user.name)
      this.access.setAccessUrl();
      this.router.navigate(["pop"])
  }



}
