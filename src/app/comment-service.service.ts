import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {
 

  private apiUrl = 'https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10';

  constructor(private http: HttpClient) { }

  getComments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/comments`);
  }

  getCommentById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/comment/${id}`);
  }
  
  loadMoreComments(page: number, limit: number): Observable<any[]> {
    const nextPageUrl = `${this.apiUrl}?_page=${page}&_limit=${limit}`;
    return this.http.get<any[]>(nextPageUrl);
  }



  searchComments(searchTerm: string): Observable<Comment[]> {
    // Suppose que vous avez déjà une méthode getComments() pour récupérer tous les commentaires
    return this.getComments().pipe(
      map((comments: any[]) => {
        if (!searchTerm.trim()) {
          return comments; // Retourne tous les commentaires si la barre de recherche est vide
        }
        // Filtre les commentaires dont le texte correspond au terme de recherche
        return comments.filter(comment => comment.body.toLowerCase().includes(searchTerm.toLowerCase()));
      })
    );
  }

  

}

