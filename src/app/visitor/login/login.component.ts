import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users/users.service';
import {User} from './../../core/models/user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  hide: boolean = Boolean();
  currentUser!: User;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private activeRoute: ActivatedRoute,
    private router: Router,
  ) {}

  loginForm: FormGroup = this.fb.group({
    nickname: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    rol: [false]
  });

  ngOnInit(): void {
  }

  onLogin(): void {
    if (!this.loginForm.valid) {
      return;
    }else{
      this.currentUser = this.loginForm.value as User;
      this.userService.setSesion(this.currentUser);
      console.log('login: ' + this.loginForm.value[0]);
      this.setLogin();
    }
    console.log(this.loginForm.value);
  }
  setLogin(): void
  {
    this.router.navigate(['/client']);
    console.log('routing.navigate();');
  }
}
