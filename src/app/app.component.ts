import { Component, OnInit } from '@angular/core';
import { AccessService } from './service/access.service';
import { StoreService } from './service/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Role-Based-Access';
  isValid=false;
  constructor(private local:StoreService,private access:AccessService){}

  ngOnInit(): void {
    if(this.local.getLocalStorageValue('roles')==null){
      this.isValid=false
    }else{
      this.isValid=true
    }
  }
}
