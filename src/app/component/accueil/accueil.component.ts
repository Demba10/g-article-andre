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
  stateClick: boolean = false;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
    this.users.forEach(element => {
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
