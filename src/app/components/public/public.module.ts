import { Page404Component } from './page404/page404.component';
import { AttractionState } from './state/attraction.state';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityDetailsComponent } from './city-details/city-details.component';
import { CityListComponent } from './city-list/city-list.component';
import { Routes, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxsModule } from '@ngxs/store';
import { JapaneseCityState } from './state/japanese-city.state';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule, MatInputModule, MatSnackBarModule, MatProgressSpinnerModule, MatSelectModule } from '@angular/material';
import {MatCardModule, MatCard} from '@angular/material/card';
import { AttractionDetailsComponent } from './attraction-details/attraction-details.component';
import { AddCityComponent } from './add-city/add-city.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { UserComponent } from './user/user.component';
import {MatIconModule} from '@angular/material/icon';
import { AttractionsComponent } from './add-attractions/attractions.component';
import { AttractionListComponent } from './attraction-list/attraction-list.component';
import { JapaneseCity } from './state/japanese-city.actions';





const routes: Routes = [
  {
    path: 'city-details/:id',
    component: CityDetailsComponent
  },
  {
    path: 'city-list',
  component: CityListComponent

  },
  {
    path: 'add-attractions',
    component: AttractionsComponent
  },
  {
    path: 'attraction-details/:id',
    component: AttractionDetailsComponent
  },
  {
    path: '',
    component: CityListComponent
  },
  {
    path: 'add-city',
    component: AddCityComponent
  },
  {
    path: 'attraction-list',
    component: AttractionListComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'edit-attraction/:id',
    component: AttractionsComponent
  },
  {
    path: 'edit-city/:id',
    component: AddCityComponent
  },
  {
    path: '**',
    component: Page404Component
  }

  

]
@NgModule({
  declarations: [CityDetailsComponent, CityListComponent, AttractionsComponent, AttractionDetailsComponent, AddCityComponent, UserComponent, AttractionListComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MatTableModule,
    MatPaginatorModule,
    NgxsModule.forRoot([JapaneseCityState, AttractionState] ),
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
