import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientAuthGuard {
  private readonly AUTH_STORAGE_KEY = 'client_authenticated';
  private isClientAuthenticated: boolean = false;

  constructor(private router: Router) {
    const storedAuth = localStorage.getItem(this.AUTH_STORAGE_KEY);
    if (storedAuth !== null) {
      this.isClientAuthenticated = JSON.parse(storedAuth);
    }
  }

  canActivate(): boolean {
    if (!this.isClientAuthenticated) {
      this.router.navigate(['/authentification/login']);
    }
    return this.isClientAuthenticated;
  }

  setClientAuthenticated(authenticated: boolean) {
    this.isClientAuthenticated = authenticated;
    localStorage.setItem(this.AUTH_STORAGE_KEY, JSON.stringify(authenticated));
  }

  getClientAuthenticated(): boolean {
    return this.isClientAuthenticated;
  } 
}