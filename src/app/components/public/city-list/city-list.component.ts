import { PageJapaneseCityDto } from './../../../../api/models/page-japanese-city-dto';
import { JapaneseCity, AutoCompleteAction, PageAction } from './../state/japanese-city.actions';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store, Select, State } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.sass']
})

export class CityListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'area', 'population', 'details'];
  dataSource = new MatTableDataSource<any>();
  autoComplete = new Subject<string>()

  @Select(state => state.japaneseCity.autoCompleteCities)
  autoComplete$: Observable<string[]>

  @Select(state => state.japaneseCity.citiesPage)
  citiesPage$: Observable<PageJapaneseCityDto>

  @Select(state => state.user.jwtToken)
  jwtToken$: Observable<string>

  constructor(public store: Store, public router: Router) { }

  ngOnInit() {
    this.store.dispatch(new PageAction(0, 10))
    this.autoComplete.pipe(debounceTime(400)).subscribe(autoComplete => this.store.dispatch(new AutoCompleteAction(autoComplete)))
  }

  updateCity(id: number) {
    this.router.navigate(['edit-city', id])
  }

  deleteCity(id: number) {
    this.store.dispatch(new JapaneseCity.DeleteAction(id))
  }

  page(event: PageEvent) {
    this.store.dispatch(new PageAction(event.pageIndex, event.pageSize))
  }
}
