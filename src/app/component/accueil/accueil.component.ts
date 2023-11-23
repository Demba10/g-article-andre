import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  users!: any[];
  authName!: string;
  authState: boolean = false;
  stateClick: boolean = false;
  userService!: any[];

  constructor(
    private router: Router,
    private serviceUser: UsersServicesService
  ) { }

  ngOnInit(): void {
    this.users.forEach(element => {
      this.serviceUser.getUsers().subscribe(users => {
        this.userService = users;
      });
      if (element.auth == true) {
        this.authName = element.prenom + ' ' + element.nom;
        this.authState = true;
      } 
    });

    if (!this.users.find((ele) => ele.auth = true)) {
      this.router.navigate([''])
    }
  }
  displayList() {
    this.stateClick = !this.stateClick;
  }
}
