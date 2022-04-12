import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/model/status';
import { AccessService } from 'src/app/service/access.service';
import { MessageService } from 'src/app/service/message.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gi',
  templateUrl: './gi.component.html',
  styleUrls: ['./gi.component.css']
})
export class GiComponent implements OnInit {

  constructor(private access:AccessService,private message:MessageService) { }

  ngOnInit(): void {
    this.access.getAuthorization("globalIndicators")
  }

  editGi(){
    if(this.access.routeAccessClaim("edit")){
      this.message.veiwMessage("✅ This GI edited succesfully",Status.SUCCESS)
    }else{
      this.message.veiwMessage("🚫 Sorry,You are not authorized to edit GI",Status.WARNING)
    }
  }

  deleteGi(){
    if(this.access.routeAccessClaim("delete")){
      this.message.veiwMessage("✅ This GI deleted succesfully",Status.SUCCESS)
    }else{
      this.message.veiwMessage("🚫 Sorry,You are not authorized to delete GI",Status.WARNING)
    }
  }
  view(){
    if(this.access.routeAccessClaim("read")){
        this.message.veiwMessage("✅ View page open succesfully",Status.SUCCESS)
      }else{
        this.message.veiwMessage("🚫 Sorry,You are not authorized to read GI",Status.WARNING)
      }
  }
}
