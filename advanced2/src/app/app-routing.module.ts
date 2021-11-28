import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutInfoOneComponent } from './components/about-info-one/about-info-one.component';
import { AboutInfoTwoComponent } from './components/about-info-two/about-info-two.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home' , component: HomePageComponent },
  { path:'articles' , component: ArticlesPageComponent },
  { path:'about' , component: AboutPageComponent, children:[
    { path:'', redirectTo:'info-one', pathMatch:'full' },
    { path:'info-one', component:AboutInfoOneComponent },
    { path:'info-two', component:AboutInfoTwoComponent },
    
  ] },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
