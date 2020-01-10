import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)
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
