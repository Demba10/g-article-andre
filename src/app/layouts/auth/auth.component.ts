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

  users: Users[] = [];
  usersUs: any[] = [];
  usersItem!: Users;
  usersUsItem!: any;
  temp!: any;

  id: number = 0; 
  prenom!: string;
  nom!: string;
  email!: string;
  password!: string;
  confirmPassword!: string;
  auth: boolean = false;

  // }
  

  // Les Methodes

  ngOnInit(): void {
    this.us.getUsers().subscribe(users => {
      this.usersUs = users;
      for (let i = 0; i < this.usersUs.length; i++) {
        this.temp = new Users((i-1), this.usersUs[i].name, "", this.usersUs[i].email, "dataplacholder", false);
        this.users.push(this.temp);
        localStorage.setItem('users', JSON.stringify(this.users));
      }
    });
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
    this.us.getUserById(3).subscribe(users => {
      this.usersUsItem = users;
      console.log(this.usersUsItem);  
    }); 
    
  }
  constructor(
    private router: Router,
    private us : UsersServicesService
  ) { }
  // SwweetAlert2-methodes

  sweetalert(title: string, text: string, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }

  addUser() {
    let controleMail = this.users.find((ele) => ele.mail == this.email)
    if (!this.prenom || !this.nom || !this.password || !this.confirmPassword || !this.email) {
      this.sweetalert('erreur', 'veuillez remplir toutes les champs', 'error')
    } else if (this.prenom[0] == ' ' || this.prenom == '' || this.prenom.length < 1) {
      this.sweetalert('erreur', 'veuillez respecter le format', 'error')
    } else if (this.nom[0] == ' ' || this.nom == '' || this.nom.length < 1) {
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
      this.users = JSON.parse(localStorage.getItem('users') || '[]') 
      this.usersItem = new Users(this.users.length, this.prenom, this.nom, this.email, this.password, this.auth);
      this.users.push(this.usersItem)
      localStorage.setItem('users', JSON.stringify(this.users));
      this.sweetalert('success', 'Inscription reussie', 'success');
      this.router.navigate(['sign-in'])
    }
  }
}
