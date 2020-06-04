import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { JapaneseCity } from '../state/japanese-city.actions';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.sass']
})
export class AddCityComponent implements OnInit {
  cityForm = new FormGroup({}) 
  cityFields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'name',
        placeholder: 'name of city',
        required: true
      }
    },
    {
      key: 'population',
      type: 'input',
      templateOptions: {
        label: 'population'
      }
    },
    {
      key: 'area',
      type: 'input',
      templateOptions: {
        label: 'area'
      }
    },
    {
      key: 'details',
      type: 'textarea',
      templateOptions: {
        label: 'details of city',
        placeholder: 'details of city',
        required: true
      }
    }
  ]

  constructor(public store: Store, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.cityForm = this.formBuilder.group({
      name: [null, Validators.required], 
      population: null,
      area: null,
      details: [null, Validators.required]
    })
  }

  addCity() {
    this.store.dispatch(new JapaneseCity.AddAction({name: this.cityForm.value.name, population: this.cityForm.value.population,
       area: this.cityForm.value.area, description: this.cityForm.value.details}))
  }

}
