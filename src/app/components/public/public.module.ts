import { AuthGuardService } from './../private/guards/auth-guard.service';
import { UserState } from './state/user.state';
import { AttractionState } from './state/attraction.state';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityDetailsComponent } from './city-details/city-details.component';
import { CityListComponent } from './city-list/city-list.component';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxsModule } from '@ngxs/store';
import { JapaneseCityState } from './state/japanese-city.state';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule, MatInputModule, MatSnackBarModule, MatProgressSpinnerModule, MatSelectModule } from '@angular/material';
import { MatCardModule, MatCard } from '@angular/material/card';
import { AddCityComponent } from './add-city/add-city.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { UserComponent } from './user/user.component';
import { MatIconModule } from '@angular/material/icon';
import { AttractionsComponent } from './add-attractions/attractions.component';
import { AttractionListComponent } from './attraction-list/attraction-list.component';
import { RegisterComponent } from './register/register.component';

export const publicRoutes: Routes = [
  {
    path: '',
    component: CityListComponent
  },
  {
    path: 'city-list',
    component: CityListComponent
  },
  {
    path: 'city-details/:id',
    component: CityDetailsComponent
  },
  {
    path: 'add-city',
    component: AddCityComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'edit-city/:id',
    component: AddCityComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'attraction-list',
    component: AttractionListComponent
  },
  {
    path: 'add-attractions',
    component: AttractionsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'edit-attraction/:id',
    component: AttractionsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
]

@NgModule({
  declarations: [AttractionsComponent, AddCityComponent, AttractionListComponent, CityDetailsComponent, CityListComponent, UserComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(publicRoutes),
    MatTableModule,
    MatPaginatorModule,
    NgxsModule.forRoot([JapaneseCityState, AttractionState, UserState]),
    HttpClientModule,
    MatButtonModule,
    TranslateModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSelectModule
  ]
})

export class PublicModule {
}
