import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  private readonly AUTH_STORAGE_KEY = 'admin_authenticated';
  private isAdminAuthenticated: boolean = false;

  constructor(private router: Router) {
    const storedAuth = localStorage.getItem(this.AUTH_STORAGE_KEY);
    if (storedAuth !== null) {
      this.isAdminAuthenticated = JSON.parse(storedAuth);
    } 

  }

  canActivate(): boolean {
    if (!this.isAdminAuthenticated) {
      this.router.navigate(['/login']);
    }
    return this.isAdminAuthenticated;
  }

  setAdminAuthenticated(authenticated: boolean) {
    this.isAdminAuthenticated = authenticated;
    localStorage.setItem(this.AUTH_STORAGE_KEY, JSON.stringify(authenticated));
  }

}