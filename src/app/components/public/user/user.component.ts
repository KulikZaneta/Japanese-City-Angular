import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { LogInAction } from '../state/user.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({})
  logInFields: FormlyFieldConfig[] = [
    {
      key: 'username',
      type: 'input',
      templateOptions: {
        label: 'username',
        placeholder: 'enter the username',
        required: true
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        label: 'password',
        placeholder: 'enter the password',
        required: true,
        type: 'password'
      }
    }
  ]


  constructor(public store: Store, public router: Router) { }

  ngOnInit() {
  }

  login() {
    this.store.dispatch(new LogInAction(this.loginForm.value.username, this.loginForm.value.password))
  }
}
