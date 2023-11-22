import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Les Propriétés {
  stateAuth!: boolean;
  authName!: string;
  authMail!: string;
  authPassword!: string;
  authUser!: any;
  users!: any[];
  userService!: any;

  // }

  // Les Méthodes {
  
  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
    this.serviceUser.getUsers().subscribe(users => {
      this.userService = users;
    });
  }

  constructor(
    private router: Router,
    private serviceUser: UsersServicesService
  ) { }

  authentify() {
    let found = this.userService.find((ele: { email: string; }) => ele.email == this.authMail);
    if (found) {
      this.users.forEach(element => {
        if (element.email == this.authMail) {
          element.auth = true;
          this.stateAuth = true;
          this.authName = element.mail;
          this.router.navigate(['accueil']);
        }
      });
      this.users.forEach(element => {
        if (element.mail != this.authName) {
          element.auth = false;
          localStorage.setItem('users', JSON.stringify(this.users))
        }
      });
    }
  }

  // }

}
