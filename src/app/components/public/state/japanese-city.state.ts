import { PageJapaneseCityDto } from './../../../../api/models/page-japanese-city-dto';
import { State, Action, StateContext } from '@ngxs/store';
import { JapaneseCityControllerService } from 'src/api/services';
import { tap } from 'rxjs/operators';
import { JapaneseCityDto } from 'src/api/models';
import { JapaneseCity, AutoCompleteAction, IdAndNameCityAction, PageAction } from './japanese-city.actions';
import { MatSnackBar } from '@angular/material';

export class JapaneseCityStateModel {
  public detailsCity: JapaneseCityDto
  public autoCompleteCities: string[]
  public citySelect: JapaneseCityDto[]
  public citiesPage: PageJapaneseCityDto
}

@State<JapaneseCityStateModel>({
  name: 'japaneseCity',
  defaults: {
    detailsCity: null,
    autoCompleteCities: [],
    citySelect: [],
    citiesPage: null
  }
})

export class JapaneseCityState {
  constructor(public japaneseCityService: JapaneseCityControllerService, public matSnackBar: MatSnackBar) { }

  @Action(JapaneseCity.FetchDetailsAction)
  fetchDetails(ctx: StateContext<JapaneseCityStateModel>, { id }: JapaneseCity.FetchDetailsAction) {
    return this.japaneseCityService.cityByIdUsingGET(id).pipe(tap(response => ctx.patchState({ detailsCity: response })))
  }

  @Action(JapaneseCity.FetchNameAction)
  fetchName(ctx: StateContext<JapaneseCityStateModel>, { name }: JapaneseCity.FetchNameAction) {
    return this.japaneseCityService.nameCityUsingGET(name).pipe(tap(response => ctx.patchState({ detailsCity: response })))
  }

  @Action(JapaneseCity.AddAction)
  addCity(ctx: StateContext<JapaneseCityStateModel>, { japaneseCityDto }: JapaneseCity.AddAction) {
    return this.japaneseCityService.addCityUsingPOST(japaneseCityDto).pipe(tap(response => this.matSnackBar.open('add city', 'X', {
      duration: 3000
    })))
  }

  @Action(JapaneseCity.EditAction)
  updateCity(ctx: StateContext<JapaneseCityStateModel>, { japaneseCityDto }: JapaneseCity.EditAction) {
    return this.japaneseCityService.updateCityUsingPUT(japaneseCityDto).pipe(tap(response => this.matSnackBar.open('update city', 'X', {
      duration: 3000
    })))
  }

  @Action(JapaneseCity.DeleteAction)
  deleteCity(ctx: StateContext<JapaneseCityStateModel>, { id }: JapaneseCity.DeleteAction) {
    return this.japaneseCityService.deleteCityUsingDELETE(id).pipe(tap(response => this.matSnackBar.open('delete city', 'X', {
      duration: 3000, horizontalPosition: 'center'
    })))
  }

  @Action(AutoCompleteAction)
  autoCompleteCities(ctx: StateContext<JapaneseCityStateModel>, { autoComplete }: AutoCompleteAction) {
    return this.japaneseCityService.autoCompleteByNameUsingGET(autoComplete).pipe(tap(response => ctx.patchState({ autoCompleteCities: response })))
  }

  @Action(IdAndNameCityAction)
  idAndNameCity(ctx: StateContext<JapaneseCityStateModel>) {
    return this.japaneseCityService.getIdAndNameUsingGET().pipe(tap(response => ctx.patchState({ citySelect: response })))
  }

  @Action(PageAction)
  pageCities(ctx: StateContext<JapaneseCityStateModel>, { page, size }: PageAction) {
    return this.japaneseCityService.getJapaneseCityPageUsingGET({ page, size }).pipe(tap(response => ctx.patchState({ citiesPage: response })))
  }
}
