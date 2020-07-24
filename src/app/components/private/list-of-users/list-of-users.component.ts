import { PageUserDto } from './../../../../api/models/page-user-dto';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { PageAction } from '../../public/state/user.actions';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.sass']
})
export class ListOfUsersComponent implements OnInit {
  displayedColumns = ['username, email, roles']
  
  @Select(state => state.user.userPage)
  userPage$: Observable<PageUserDto>

  constructor(public store: Store, public router: Router) { }

  ngOnInit() {
    this.store.dispatch(new PageAction(0, 10))
  }
}
