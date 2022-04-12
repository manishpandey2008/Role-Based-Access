import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { GiComponent } from './components/gi/gi.component';
import { LoginComponent } from './components/login/login.component';
import { PopComponent } from './components/pop/pop.component';
import { UserComponent } from './components/user/user.component';
import { AccessGuard } from './service/access.guard';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"gi",component:GiComponent,canActivate:[AuthGuard,AccessGuard]},
  {path:"pop",component:PopComponent,canActivate:[AuthGuard,AccessGuard]},
  {path:"user",component:UserComponent,canActivate:[AuthGuard,AccessGuard]},
  {path:"admin",component:AdminComponent,canActivate:[AuthGuard,AccessGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
