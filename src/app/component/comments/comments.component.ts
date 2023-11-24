import { Component } from '@angular/core';
import { CommentServiceService } from 'src/app/services/comment-service.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  comments: any[] = []; // Un tableau pour stocker les commentaires actuellement affichés
  currentPage = 1; // La page actuellement affichée, initialisée à 1
  limit = 10;  // Le nombre de commentaires à afficher par page
  searchTerm: string = ''; // Propriété pour stocker le terme de recherche
  filteredComments: any[] = []; // Stockage des commentaires filtrés
  comment: any;

  constructor(private commentService: CommentServiceService) { }

  ngOnInit(): void {
    this.commentService.getComments().subscribe((data: any[]) => {
      this.comments = data; // Appel initial pour charger les commentaires au chargement du composant
    });

  }

  // Méthode pour charger les commentaires initiaux
  loadComments() {
    this.commentService.getComments().subscribe(
      (data: any[]) => {
        this.comments = data;
      },
      (error: any) => {
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
      (error: any) => {
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
        (error: any) => {
          console.error('Erreur de chargement des commentaires moins nombreux :', error);
        }
      );
    }

  }

  searchComments() {
    if (this.searchTerm.trim() !== '') {
      this.filteredComments = this.comments.filter(comment =>
        comment.body.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      // Réinitialiser les commentaires filtrés si la recherche est vide
      this.filteredComments = [];
    }
  }
}
