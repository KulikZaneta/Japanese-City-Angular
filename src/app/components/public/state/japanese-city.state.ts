import { State, Action, StateContext } from '@ngxs/store';
import { JapaneseCityControllerService } from 'src/api/services';
import { pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JapaneseCityDto } from 'src/api/models';
import { JapaneseCity, AutoCompleteAction, IdAndNameCityAction } from './japanese-city.actions';
import { MatSnackBar } from '@angular/material';

export class JapaneseCityStateModel {
  public japaneseCities: JapaneseCityDto[]
  public detailsCity: JapaneseCityDto
  public autoCompleteCities: string[] 
  public citySelect: JapaneseCityDto[]
}

@State<JapaneseCityStateModel>({
  name: 'japaneseCity',
  defaults: {
    japaneseCities: [],
    detailsCity: null,
    autoCompleteCities: [],
    citySelect: []
    
  }
})


export class JapaneseCityState {
  constructor(public japaneseCityService: JapaneseCityControllerService, public matSnackBar: MatSnackBar){}

  @Action(JapaneseCity.FetchAllAction)
  fetchAll(ctx: StateContext<JapaneseCityStateModel>, {}: JapaneseCity.FetchAllAction) {
    return this.japaneseCityService.allCitiesUsingGET().pipe(tap(response => ctx.patchState({japaneseCities: response})));
  }

  @Action(JapaneseCity.FetchDetailsAction)
  fetchDetails(ctx: StateContext<JapaneseCityStateModel>, {id}: JapaneseCity.FetchDetailsAction) {
    return this.japaneseCityService.cityByIdUsingGET(id).pipe(tap(response => ctx.patchState({detailsCity: response})));
  }

  @Action(JapaneseCity.FetchNameAction)
  fetchName(ctx: StateContext<JapaneseCityStateModel>, {name}: JapaneseCity.FetchNameAction) {
    return this.japaneseCityService.nameCityUsingGET(name).pipe(tap(response => ctx.patchState({detailsCity: response})));
  }

  @Action(JapaneseCity.AddAction)
  addCity(ctx: StateContext<JapaneseCityStateModel>, {japaneseCityDto}: JapaneseCity.AddAction) {
    return this.japaneseCityService.addCityUsingPOST(japaneseCityDto).pipe(tap(response => this.matSnackBar.open('add city', 'X', {
      duration:3000
    })))
  }

  @Action(JapaneseCity.EditAction)
  updateCity(ctx: StateContext<JapaneseCityStateModel>, {japaneseCityDto}: JapaneseCity.EditAction) {
    return this.japaneseCityService.updateCityUsingPUT(japaneseCityDto).pipe(tap(response => this.matSnackBar.open('update city', 'X', {
      duration:3000
  })))
  }

  @Action(JapaneseCity.DeleteAction)
  deleteCity(ctx: StateContext<JapaneseCityStateModel>, {id}: JapaneseCity.DeleteAction) {
    return this.japaneseCityService.deleteCityUsingDELETE(id).pipe(tap(response => this.matSnackBar.open('delete city', 'X', {
      duration:3000, horizontalPosition: 'center'} 
    )))

  } 

  @Action(AutoCompleteAction)
  autoCompleteCities(ctx: StateContext<JapaneseCityStateModel>, {autoComplete}: AutoCompleteAction) {
    return this.japaneseCityService.autoCompleteByNameUsingGET(name).pipe(tap(response => ctx.patchState({autoCompleteCities: response})));;
  }

  @Action(IdAndNameCityAction)
  idAndNameCity(ctx: StateContext<JapaneseCityStateModel>, {}: IdAndNameCityAction) {
    return this.japaneseCityService.getIdAndNameUsingGET().pipe(tap(response => ctx.patchState({citySelect: response})))
  }
}
