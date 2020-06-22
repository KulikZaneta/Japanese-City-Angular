import { JapaneseCityDto } from 'src/api/models';
import { Store, Select } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JapaneseCity } from '../state/japanese-city.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.sass']
})
export class CityDetailsComponent implements OnInit {

  @Select(state => state.japaneseCity.detailsCity)
  detailsCity$: Observable<JapaneseCityDto>
  constructor(public store: Store, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.store.dispatch(new JapaneseCity.FetchDetailsAction(params['id'])))
  }
}
