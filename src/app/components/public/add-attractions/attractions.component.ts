import { JapaneseCityDto } from 'src/api/models';
import { Observable } from 'rxjs';
import { state } from '@angular/animations';
import { IdAndNameCityAction } from './../state/japanese-city.actions';
import { AttractionDto } from './../../../../api/models/attraction-dto';
import { Store, State, Select } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { Attraction } from '../state/attraction.actions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.sass']
})
export class AttractionsComponent implements OnInit {
  attractionForm = new FormGroup({}) 
  attractionFields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'name',
        placeholder: 'name of attraction',
        required: true
      }
    },
    {
      key: 'url',
      type: 'input',
      templateOptions: {
        label: 'url',
        placeholder: 'url of attraction'
      }
    }
  ]

  @Select(state => state.japaneseCity.citySelect)
  citySelect$: Observable<JapaneseCityDto[]>

  constructor(public store: Store, public formBuilder: FormBuilder) { }


  ngOnInit() {
    this.store.dispatch(new Attraction.PageAction(0, 10)),
    this.attractionForm = this.formBuilder.group({
      name: [null, Validators.required], 
      url: null,
      city: [null, Validators.required]
    })
    this.store.dispatch(new IdAndNameCityAction())
  }

  addAttraction() {
    this.store.dispatch(new Attraction.AddAction({cityId: this.attractionForm.value.city, name: this.attractionForm.value.name, url: this.attractionForm.value.url }))
  }

  updateAttraction(attractionDto: AttractionDto) {
    this.store.dispatch(new Attraction.UpdateAction(attractionDto))
  }
  

}
