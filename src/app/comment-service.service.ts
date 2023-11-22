import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {
  loadMoreComments(currentPage: number, limit: number) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10';

  constructor(private http: HttpClient) { }

  getComments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/comments`);
  }

  getCommentById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/comment/${id}`);
  }
  
  
}

