import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/service/store.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(private localStore:StoreService) { }

  name:any;
  username:any;
  roles:any;

  ngOnInit(): void {
    this.roles=this.localStore.getLocalStorageValue("roles")
    this.username=this.localStore.getLocalStorageValue("username")
    this.name=this.localStore.getLocalStorageValue("name")
  }

}
