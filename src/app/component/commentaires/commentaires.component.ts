import { Component, OnInit } from '@angular/core';
import { CommentServiceService } from 'src/app/comment-service.service';


@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.component.html',
  styleUrls: ['./commentaires.component.scss']
})
export class CommentairesComponent implements OnInit {

        comments: any[] = []; // Un tableau pour stocker les commentaires actuellement affichés
        currentPage = 1; // La page actuellement affichée, initialisée à 1
        limit = 10;  // Le nombre de commentaires à afficher par page
   
     constructor(private commentService: CommentServiceService) {}
   
     ngOnInit(): void {
      this.commentService.getComments().subscribe((data: any[]) =>{
        this.comments = data; // Appel initial pour charger les commentaires au chargement du composant
      });
      
     }

      // Méthode pour charger les commentaires initiaux
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

      // Méthode pour charger plus de commentaires (fonctionnalité "Voir plus")
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
    
    // Méthode pour charger moins de commentaires (fonctionnalité "Voir moins")
  loadLess() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.commentService.loadMoreComments(this.currentPage, this.limit).subscribe(
        (data: any[]) => {
          this.comments = data;
        },
        error => {
          console.error('Erreur de chargement des commentaires moins nombreux :', error);
        }
      );
    }

  }

}
    