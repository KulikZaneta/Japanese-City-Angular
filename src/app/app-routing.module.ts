import { publicRoutes } from './components/public/public.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './components/page404/page404.component';
import { userRoutes } from './components/private/private.module';

const routes: Routes = [
  {
    path: '',
    children: [...publicRoutes, ...userRoutes]
  }, 
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
