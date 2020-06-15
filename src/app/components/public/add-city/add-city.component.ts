import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { JapaneseCity } from '../state/japanese-city.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.sass']
})
export class AddCityComponent implements OnInit {
  cityId: number
  cityForm = new FormGroup({})

  constructor(public store: Store, public formBuilder: FormBuilder, public route: ActivatedRoute) { }

  ngOnInit() {
    this.createCityForm(null, null, null, null)
    this.route.params.subscribe(params => {
      this.cityId = params['id']
      if (this.cityId) {
        this.store.dispatch(new JapaneseCity.FetchDetailsAction(this.cityId)).subscribe(response => {
          const cities = response.japaneseCity.detailsCity
          this.createCityForm(cities.name, cities.population, cities.area, cities.description)
        })
      }
    })

  }

  createCityForm(name: null, population: null, area: null, description: null) {
    this.cityForm = this.formBuilder.group({
      name: [name, Validators.required],
      population: population,
      area: area,
      details: [description, Validators.required],
      attraction: this.formBuilder.array([this.createNewParameter()])
    })
  }

  createNewParameter() {
    return this.formBuilder.group({
      name: [null, Validators.required],
      url: [null, Validators.required]
    })
  }

  getControls() {
    return (this.cityForm.controls['attraction'] as FormArray).controls
  }

  addNewAttraction() {
    const newAttraction = (this.cityForm.controls['attraction'] as FormArray).controls
    newAttraction.push(this.createNewParameter())
  }

  removeAttraction(index: number) {
    const removeAttraction = (this.cityForm.controls['attraction'] as FormArray)
    removeAttraction.removeAt(index)
  }

  updateCity() {
    this.store.dispatch(new JapaneseCity.EditAction({
      name: this.cityForm.value.name, population: this.cityForm.value.population, area: this.cityForm.value.area, description: this.cityForm.value.details, id: this.cityId
    }))

  }

  addCity() {
    this.store.dispatch(new JapaneseCity.AddAction({
      name: this.cityForm.value.name, population: this.cityForm.value.population,
      area: this.cityForm.value.area, description: this.cityForm.value.details,
      attractions: this.cityForm.value.attraction
    }))
    this.cityForm.reset()
  }



}
