import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { PageAttractionDto } from 'src/api/models';
import { Attraction } from '../state/attraction.actions';

@Component({
  selector: 'app-attraction-list',
  templateUrl: './attraction-list.component.html',
  styleUrls: ['./attraction-list.component.sass']
})
export class AttractionListComponent implements OnInit {
  public displayedColumns=["name", "url", "city"]

  @Select(state => state.attraction.attractionPage)
  attractionPage$: Observable<PageAttractionDto>


  constructor(public store: Store) { }

  ngOnInit() {
    this.store.dispatch(new Attraction.PageAction(0, 10))
  }

}
