import { UserDto } from './../../../../api/models/user-dto';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, EmailValidator } from '@angular/forms';
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
        required: true,
        maxLength: 255
      },
      validation: {
        messages: {
          required: 'You need to provide a name'
        }
      }
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'email',
        placeholder: 'enter the email',
        required: true,
        type: 'email',
        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      },
      validation: {
        messages: {
          pattern: 'You need to provide a email'
        }
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        label: 'password',
        placeholder: 'enter the password',
        required: true,
        type: 'password',
        minLength: 8,
        maxLength: 255
      },
      validation: {
        messages: {
          minLenght: 'string',
          required: 'Password must be at least 8 characters long'
        }
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
