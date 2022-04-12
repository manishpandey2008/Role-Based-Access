import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/model/status';
import { AccessService } from 'src/app/service/access.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.css']
})
export class PopComponent implements OnInit {

  constructor(private access:AccessService,private message:MessageService) { }

  ngOnInit(): void {
    this.access.getAuthorization("pop")
  }

  editPop(){
    if(this.access.routeAccessClaim("edit")){
      this.message.veiwMessage("✅ This Data edited succesfully",Status.SUCCESS)
    }else{
      this.message.veiwMessage("🚫 Sorry,You are not authorized to edit Data",Status.WARNING)
    }
  }

  deletePop(){
    if(this.access.routeAccessClaim("delete")){
      this.message.veiwMessage("✅ This data deleted succesfully",Status.SUCCESS)
    }else{
      this.message.veiwMessage("🚫 Sorry,You are not authorized to delete data",Status.WARNING)
    }
  }

  view(){
    if(this.access.routeAccessClaim("read")){
      this.message.veiwMessage("✅ View data open succesfully",Status.SUCCESS)
    }else{
      this.message.veiwMessage("🚫 Sorry,You are not authorized to read Data",Status.WARNING)
    }
  }

}
