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
  posts!: any[];
  savePosts!: any[];
  searchPosts: any;

  constructor(private router: Router, private us: UsersServicesService){}

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

    this.us.getPosts().subscribe(posts => {
      this.posts = posts;
      this.savePosts = posts;
      console.log("Les artiles");

      console.log(this.posts);
    });
  }
  displayList() {
    this.stateClick = !this.stateClick;
  }
  rechercher() {
    this.posts = this.savePosts
    let newPosts: any[] = [];
    this.posts.forEach(element => {
      if (element.title.includes(this.searchPosts)) {
        newPosts.push(element)
        this.posts = newPosts;
      }
    });
  }
}
