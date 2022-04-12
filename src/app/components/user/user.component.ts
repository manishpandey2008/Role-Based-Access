import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/model/status';
import { user } from 'src/app/model/user';
import { AccessService } from 'src/app/service/access.service';
import { JsonService } from 'src/app/service/json.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  allUsers!:user[];
  constructor(private json:JsonService,private access:AccessService,private message:MessageService) { }

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
      this.message.veiwMessage("✅ This User edited succesfully",Status.SUCCESS)
    }else{
      this.message.veiwMessage("🚫 Sorry,You are not authorized to edit User",Status.WARNING)
    }
  }

  deleteUser(){
    if(this.access.routeAccessClaim("delete")){
      this.message.veiwMessage("✅ This user deleted succesfully",Status.SUCCESS)
    }else{
      this.message.veiwMessage("🚫 Sorry,You are not authorized to delete user",Status.WARNING)
    }
  }
  view(){
    if(this.access.routeAccessClaim("read")){
      this.message.veiwMessage("✅ View user open succesfully",Status.SUCCESS)
    }else{
      this.message.veiwMessage("🚫 Sorry,You are not authorized to read user data",Status.WARNING)
    }
  }
}
