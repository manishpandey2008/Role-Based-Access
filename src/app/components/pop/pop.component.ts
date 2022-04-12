import { Component, OnInit } from '@angular/core';
import { AccessService } from 'src/app/service/access.service';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.css']
})
export class PopComponent implements OnInit {

  constructor(private access:AccessService) { }

  ngOnInit(): void {
    this.access.getAuthorization("pop")
  }

  editPop(){
    if(this.access.routeAccessClaim("edit")){
      alert("✅ Item edit succesfully !!");
    }else{
      alert("🚫 You are not authorized to edit this");
    }
  }

  deletePop(){
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
