import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component';
import { Router, Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes =[
  {
    path: 'users',
    component: ListOfUsersComponent,
    canActivate: [AuthGuardService],
    data: {role:'ROLE_ADMIN'}
  }
]

@NgModule({
  declarations: [ListOfUsersComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class PrivateModule { }
