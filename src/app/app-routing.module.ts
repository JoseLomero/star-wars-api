import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { FilmsGuard } from './pages/films/films.guard';


export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'films',
    loadChildren: () => import('./pages/films/films.module').then(m => m.FilmsModule),
    canActivate: [ FilmsGuard ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules,
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
