import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AccueilComponent } from '../accueil/accueil.component';
import { AjoutArticleComponent } from '../ajout-article/ajout-article.component';
import { ListArticleComponent } from '../list-article/list-article.component';
import { CorbeilleComponent } from '../corbeille/corbeille.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {
        path: '', redirectTo: 'articles', pathMatch: 'full'
      },
      {
        path: 'articles', component: AccueilComponent
      },
      {
        path: 'ajout-article', component: AjoutArticleComponent
      },
      {
        path: 'list-article', component: ListArticleComponent
      },
      {
        path: 'corbeille', component: CorbeilleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
