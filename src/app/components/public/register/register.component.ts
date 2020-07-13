import { UserDto } from './../../../../api/models/user-dto';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Store } from '@ngxs/store';
import { RegisterUserAction } from '../state/user.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({})
  registerFields: FormlyFieldConfig[] = [
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
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'email',
        placeholder: 'enter the email',
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
    },
    
  ]

  constructor(public store: Store) { }

  ngOnInit() {
  }

  register() {
    this.store.dispatch(new RegisterUserAction({username: this.registerForm.value.username, email: this.registerForm.value.email, password: this.registerForm.value.password}))
  }
}
