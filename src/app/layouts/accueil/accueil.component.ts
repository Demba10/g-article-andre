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
  articles!: any[];
  posts!: any[];
  savePosts!: any[];
  authName!: string;
  authState: boolean = false;
  stateClick: boolean = false;
  searchPosts!: any;
  commentaires!: any[];

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
    this.articles = JSON.parse(localStorage.getItem('articles') || '[]');
    this.users.forEach(element => {
      if (element.auth == true) {
        this.authName = element.prenom + ' ' + element.nom;
        this.authState = true;
      }
    });
    this.us.getPosts().subscribe(posts => {
      this.posts = posts;
      this.savePosts = posts;
      console.log("Les artiles");
      
      console.log(this.posts);
    });
    this.us.getComments().subscribe(comments => {
      this.commentaires = comments;
      console.log('Les commentaires');
      console.log(this.commentaires);
    })
  }

  constructor(private router: Router, private us: UsersServicesService) { }

  detailler(param: number) {
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

  disconnect() {
    this.users.forEach(element => {
      element.auth = false;
      localStorage.setItem('users', JSON.stringify(this.users));
    });
    this.router.navigate(['sign-in']);
  }
}