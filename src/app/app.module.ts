import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopComponent } from './components/pop/pop.component';
import { GiComponent } from './components/gi/gi.component';
import { UserComponent } from './components/user/user.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LoginComponent } from './components/login/login.component';
import { JsonService } from './service/json.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreService } from './service/store.service';
import { AccessService } from './service/access.service';
import { AdminComponent } from './components/admin/admin.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    PopComponent,
    GiComponent,
    UserComponent,
    SideNavComponent,
    LoginComponent,
    AdminComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [JsonService,StoreService,AccessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
