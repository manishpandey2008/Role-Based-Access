import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/model/user';
import { AccessService } from 'src/app/service/access.service';
import { JsonService } from 'src/app/service/json.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  allUsers!:user[];
  constructor(private json:JsonService,private access:AccessService) { }

  ngOnInit(): void {
    this.getData();
  }
 getData(){
    this.access.getAuthorization("user")
    this.json.fetch("user").subscribe((resp:any)=>{
      this.allUsers=resp
    })
  }

  editUser(){
    if(this.access.routeAccessClaim("edit")){
      alert("✅ Item edit succesfully !!");
    }else{
      alert("🚫 You are not authorized to edit this");
    }
  }

  deleteUser(){
    if(this.access.routeAccessClaim("delete")){
    alert("✅ Item deleted succesfully !!");
    }else{
      alert("🚫 You are not authorized to delete this");
    }
  }
  view(){
    if(this.access.routeAccessClaim("read")){
      alert("✅ Item open in read formate succesfully !!");
      }else{
        alert("🚫 You are not authorized to read this");
      }
  }
}
