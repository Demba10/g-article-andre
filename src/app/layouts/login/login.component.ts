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
  usersUs!: any[];
  usersUsItem!: any;

  // }

  // Les Méthodes {
  ngOnInit(): void {
    this.us.getUsers().subscribe(users => {
      this.usersUs = users;
      
    });
    this.us.getUserById(3).subscribe(users => {
      this.usersUsItem = users;
      console.log(this.usersUsItem);
    });

    this.users = JSON.parse(localStorage.getItem('users') || '[]');
    console.log(this.users);
    
  }

  constructor(
    private router: Router,
    private us: UsersServicesService
  ) { }

  authentify() {
    let found = this.users.find((ele) => ele.mail == this.authMail);
    if (found) {
      this.users.forEach(element => {
        if (element.mail == this.authMail) {
          element.auth = true;
          this.stateAuth = true;
          this.authName = element.mail;
          localStorage.setItem('users', JSON.stringify(this.users))
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