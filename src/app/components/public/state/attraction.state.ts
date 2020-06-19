import { PageAttractionDto } from './../../../../api/models/page-attraction-dto';
import { AttractionDto } from './../../../../api/models/attraction-dto';
import { tap } from 'rxjs/operators';
import { State, Action, StateContext } from '@ngxs/store';
import { AttractionControllerService } from 'src/api/services/attraction-controller.service';
import { MatSnackBar } from '@angular/material';
import { Attraction } from './attraction.actions';

export class AttractionStateModel {
  public attractionById: AttractionDto;
  public attractionPage: PageAttractionDto;

}

@State<AttractionStateModel>({
  name: 'attraction',
  defaults: {
   attractionById: null,
   attractionPage: null,
  
  }
})
export class AttractionState {
  constructor(public attractionService: AttractionControllerService, public matSnackBar: MatSnackBar){}

  @Action(Attraction.PageAction)
  pageAttraction(ctx: StateContext<AttractionStateModel>, {page, size}: Attraction.PageAction) {
    return this.attractionService.getAttractionPageUsingGET({page, size}).pipe(tap(response => ctx.patchState({attractionPage: response})))
  }

  @Action(Attraction.FetchIdAction)
  idAttraction(ctx: StateContext<AttractionStateModel>, {id}: Attraction.FetchIdAction) {
    return this.attractionService.getAttractionByIdUsingGET(id).pipe(tap(response => ctx.patchState({attractionById: response})))
  }

  @Action(Attraction.AddAction)
  addAttraction(ctx: StateContext<AttractionStateModel>, {attractionDto}: Attraction.AddAction) {
    return this.attractionService.saveAttractionUsingPOST(attractionDto).pipe(tap(response => this.matSnackBar.open('add attraction', 'X', {
      duration:3000
    })))
  }

  @Action(Attraction.UpdateAction)
  updateAttraction(ctx: StateContext<AttractionStateModel>, {attractionDto}: Attraction.UpdateAction) {
    return this.attractionService.updateAttractionUsingPUT(attractionDto).pipe(tap(response => this.matSnackBar.open('update attraction', 'X', {
      duration:3000
    })))
  }

  @Action(Attraction.DeleteAction)
  deleteAttraction(ctx: StateContext<AttractionStateModel>, {id}: Attraction.DeleteAction) {
    return this.attractionService.deleteAttractionUsingDELETE(id).pipe(tap(response => this.matSnackBar.open('delete attraction', 'X', {
      duration:3000
    })))
  }

}
