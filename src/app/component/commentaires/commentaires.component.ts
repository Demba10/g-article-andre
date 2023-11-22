import { Component, OnInit } from '@angular/core';
import { CommentServiceService } from 'src/app/comment-service.service';


@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.component.html',
  styleUrls: ['./commentaires.component.scss']
})
export class CommentairesComponent implements OnInit {


     constructor(private commentService: CommentServiceService) {}

     ngOnInit(): void {
      this.commentService.getComments().subscribe((data: any[]) =>{
        this.comments = data;
      });
      
     }
     comments: any[] = []; 

}









