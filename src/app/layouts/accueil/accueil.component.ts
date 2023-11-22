import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  
  users!: any[];
  authName!: string;
  authState: boolean = false;
  stateClick: boolean =  false;

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
    this.users.forEach(element => {
      if (element.auth == true) {
        this.authName = element.prenom + ' ' + element.nom;
        this.authState = true;
      } 
    });
  }

  constructor(private router: Router){}

  displayList() {
    this.stateClick = !this.stateClick;
  }

  disconnect() {
    this.users.forEach(element => {
      element.auth = false;
      localStorage.setItem('users', JSON.stringify(this.users));
    });
    this.router.navigate(['sign-in']);
  }
}
