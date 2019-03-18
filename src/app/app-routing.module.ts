import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './auth/registration/registration.component';
import { WriteMsgComponent } from './write-msg/write-msg.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: '', component: RegistrationComponent},
  {path: 'write-msg/:id', component: WriteMsgComponent},
  {path: 'admin', component: AdminComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
