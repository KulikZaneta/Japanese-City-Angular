import { state } from '@angular/animations';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { PageAttractionDto, AttractionDto } from 'src/api/models';
import { Attraction } from '../state/attraction.actions';
import { PageEvent } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attraction-list',
  templateUrl: './attraction-list.component.html',
  styleUrls: ['./attraction-list.component.sass']
})
export class AttractionListComponent implements OnInit {
  displayedColumns = ['name', 'url', 'more']
  displayColumunNotLogged = ['name', 'url']

  @Select(state => state.attraction.attractionPage)
  attractionPage$: Observable<PageAttractionDto>

  @Select(state => state.user.jwtToken)
  jwtToken$ : Observable<string>

  constructor(public store: Store, public router: Router) { }

  ngOnInit() {
    this.store.dispatch(new Attraction.PageAction(0, 10))
  }

  updateAttraction(id: number) {
    this.router.navigate(['edit-attraction', id])
  }

  deleteAttraction(id: number) {
    this.store.dispatch(new Attraction.DeleteAction(id))
  }

  changePage(event: PageEvent) {
    this.store.dispatch(new Attraction.PageAction(event.pageIndex, event.pageSize))
  }

}
