
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component';
import { Router, Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';
import { MatTableModule, MatPaginatorModule } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token-interceptor';

export const userRoutes: Routes = [
  {
    path: 'private/users',
    component: ListOfUsersComponent,
    canActivate: [AuthGuardService],
    data: { role: 'ROLE_ADMIN' }
  }
]

@NgModule({
  declarations: [ListOfUsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ]
})
export class PrivateModule { }
