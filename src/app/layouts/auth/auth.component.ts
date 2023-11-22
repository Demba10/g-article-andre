import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users/users.model';
import { UsersServicesService } from 'src/app/services/users-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  // les Prprietés {

  // users: Users[] = [];
  usersItem!: Users;
  userService!: any[];
  users!: any[];
  
  id: number = 0; 
  prenom!: string;
  nom!: string;
  email!: string;
  password!: string;
  confirmPassword!: string;
  auth: boolean = false;
  // }
  name!: number;
  

  // Les Methodes

  ngOnInit(): void {
      this.serviceUser.getUsers().subscribe(users => {
        this.userService = users;
      });
  }
      
      constructor(
        private router: Router,
        private serviceUser: UsersServicesService
        ) { }
        // SwweetAlert2-methodes
  sweetalert(title: string, text: string, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }

  alerter() {}

  addUser() {
    let controleMail = this.users.find((ele) => ele.mail == this.email)
    if (!this.prenom || !this.nom || !this.password || !this.confirmPassword || !this.email) {
      this.sweetalert('erreur', 'veuillez remplir toutes les champs', 'error')
    }
    else if (this.nom[0] == ' ' || this.nom == '' || this.nom.length < 1) {
      this.sweetalert('erreur', 'veuillez respecter le format', 'error')
    } else if (!this.email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/)) {
      this.sweetalert('erreur', 'format de mail invalid', 'error')
    } else if (controleMail) {
      this.sweetalert('erreur', 'ce mail est deja utilisé', 'error')
    } else if (this.password.length <= 6) {
      this.sweetalert('erreur', 'format mot de pass invalide', 'error')
    } else if (this.password != this.confirmPassword) {
      this.sweetalert('erreur', 'Les deux mot de passe sont different', 'error')
    } else {
      this.usersItem = new Users(this.users.length, this.prenom, this.nom, this.email, this.password, this.auth);

      this.users.push(this.usersItem)
      this.sweetalert('success', 'Inscription reussie', 'success');
      this.router.navigate(['sign-in'])
    }
  }
}