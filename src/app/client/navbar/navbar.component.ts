import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientAuthGuard } from 'src/app/guards/client-auth.guard';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  scrolled = false;
  isAuthenticated: boolean;
  id: any;
  private readonly AUTH_STORAGE_KEY = 'Id_client_authenticated';
  constructor(private router: Router, private act : ActivatedRoute, private userService: UserService , private authGuard: ClientAuthGuard,) {
    this.isAuthenticated = this.authGuard.getClientAuthenticated();
  }
  ngOnInit() {  
    this.id = localStorage.getItem(this.AUTH_STORAGE_KEY);
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 0;
  }
  goToShop(search :boolean){
    this.router.navigate(['../ /shop'], { queryParams: { search: search } });
  }
}
