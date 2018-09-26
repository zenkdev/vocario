import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise<boolean>(resolve => {
      const subscription = this.auth.user.subscribe(user => {
        subscription.unsubscribe();
        if (!user) {
          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  }
}
