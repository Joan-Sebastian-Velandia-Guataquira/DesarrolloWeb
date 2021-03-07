import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: string = String();
  password: string = String();

  constructor() { }

  ngOnInit(): void {
  }

  doLogin()
  {
    localStorage.setItem(this.user, this.password );
  }

}
