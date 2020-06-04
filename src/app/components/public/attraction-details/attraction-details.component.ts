import { AttractionDto } from './../../../../api/models/attraction-dto';
import { Observable } from 'rxjs';
import { state } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Attraction } from '../state/attraction.actions';

@Component({
  selector: 'app-attraction-details',
  templateUrl: './attraction-details.component.html',
  styleUrls: ['./attraction-details.component.sass']
})
export class AttractionDetailsComponent implements OnInit {
  @Select(state => state.attraction.attractionById) 
  attractionById$: Observable<AttractionDto>

  constructor(public route: ActivatedRoute, public store: Store) {

   }
  


  ngOnInit() {
    this.route.params.subscribe(params => this.store.dispatch(new Attraction.FetchIdAction(params['id'])) )
  }

}
