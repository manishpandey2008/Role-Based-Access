import { Component, OnInit } from '@angular/core';
import { AccessService } from 'src/app/service/access.service';

@Component({
  selector: 'app-gi',
  templateUrl: './gi.component.html',
  styleUrls: ['./gi.component.css']
})
export class GiComponent implements OnInit {

  constructor(private access:AccessService) { }

  ngOnInit(): void {
    this.access.getAuthorization("globalIndicators")
  }

  editGi(){
    if(this.access.routeAccessClaim("edit")){
      alert("✅ Item edit succesfully !!");
    }else{
      alert("🚫 You are not authorized to edit this");
    }
  }

  deleteGi(){
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
