import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path:'' , redirectTo:'home', pathMatch:'full' },
  {  path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {  canActivate:[AuthGuard], path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
