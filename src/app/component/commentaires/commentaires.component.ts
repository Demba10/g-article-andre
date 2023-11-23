import { Component, OnInit } from '@angular/core';
import { CommentServiceService } from 'src/app/comment-service.service';


@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.component.html',
  styleUrls: ['./commentaires.component.scss']
})
export class CommentairesComponent implements OnInit {

        comments: any[] = [];
        currentPage = 1;
        limit = 10;
   
     constructor(private commentService: CommentServiceService) {}
   
     ngOnInit(): void {
      this.commentService.getComments().subscribe((data: any[]) =>{
        this.comments = data;
      });
      
     }

     loadComments() {
      this.commentService.getComments().subscribe(
        (data: any[]) => {
          this.comments = data;
        },
        error => {
          console.error('Erreur de chargement des commentaires :', error);
        }
      );
    }

    loadMore() {
      this.currentPage++; // Incrémenter la page pour charger la suivante
      this.commentService.loadMoreComments(this.currentPage, this.limit).subscribe(
        (data: any[]) => {
          this.comments = [...this.comments, ...data]; // Ajoute les nouveaux commentaires à la liste existante
        },
        ( error: any) => {
          console.error('Erreur de chargement des commentaires supplémentaires :', error);
        }
      );
    }

  

     

}











