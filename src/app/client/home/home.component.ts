import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ClientAuthGuard } from 'src/app/guards/client-auth.guard';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAuthenticated: boolean;
  id: any;
  private readonly AUTH_STORAGE_KEY = 'Id_client_authenticated';
  constructor(private router: Router, private act : ActivatedRoute, private userService: UserService , private authClientGuard: ClientAuthGuard, private authAdminGuard: AuthGuard) {
    this.isAuthenticated = this.authClientGuard.getClientAuthenticated();
  }
  ngOnInit() {
    this.id = localStorage.getItem(this.AUTH_STORAGE_KEY);
    this.authAdminGuard.setAdminAuthenticated(false);
  }
  goToShop(search :boolean){
    this.router.navigate(['../ /shop'], { queryParams: { search: search } });
  }
}
