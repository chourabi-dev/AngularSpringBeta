import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { ContentComponent } from './components/content/content.component';
import { BlocArticlesComponent } from './components/bloc-articles/bloc-articles.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AboutInfoOneComponent } from './components/about-info-one/about-info-one.component';
import { AboutInfoTwoComponent } from './components/about-info-two/about-info-two.component';
import { UserComponent } from './pages/user/user.component';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidemenuComponent,
    ContentComponent,
    BlocArticlesComponent,
    ArticleCardComponent,
    HomePageComponent,
    ArticlesPageComponent,
    AboutPageComponent,
    AboutInfoOneComponent,
    AboutInfoTwoComponent,
    UserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
