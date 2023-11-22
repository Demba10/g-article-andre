import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-article',
  templateUrl: './ajout-article.component.html',
  styleUrls: ['./ajout-article.component.scss']
})
export class AjoutArticleComponent implements OnInit {


  id: number = 0 ;
  data!: string;
  title!: string;
  content!: string;
  created_date!: any;
  state!: number;
  id_user!: number;
  
  ngOnInit(): void {
  }


}
