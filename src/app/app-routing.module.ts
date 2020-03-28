import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'wash', loadChildren: () => import('./wash/wash.module').then( m => m.WashPageModule)},
  { path: 'about', loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)},
  { path: 'complete', loadChildren: () => import('./complete/complete.module').then( m => m.CompletePageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
