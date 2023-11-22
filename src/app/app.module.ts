import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './layouts/login/login.component';
import { AccueilComponent } from './layouts/accueil/accueil.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { AjoutArticleComponent } from './component/ajout-article/ajout-article.component';
import { ListArticleComponent } from './component/list-article/list-article.component';
import { CorbeilleComponent } from './component/corbeille/corbeille.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavbarComponent,
    LoginComponent,
    AccueilComponent,
    SidebarComponent,
    AjoutArticleComponent,
    ListArticleComponent,
    CorbeilleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
