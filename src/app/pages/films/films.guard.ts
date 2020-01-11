import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsGuard implements CanActivate {
  canActivate(): boolean {
    if (!!sessionStorage.getItem('userData')) {
      return true;
    }
    // ejercicio 2 parte 1
    alert('Register to be able to watch the info!');
  }

}
