import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ClientAuthGuard } from 'src/app/guards/client-auth.guard';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-deconnecter',
  templateUrl: './deconnecter.component.html',
  styleUrls: ['./deconnecter.component.css']
})
export class DeconnecterComponent{
  constructor(private router: Router, private act : ActivatedRoute, private userService: UserService,private authGuard: ClientAuthGuard,private location: Location) {} 
  navigateToAutre() {
    this.location.back();
  }
  navigateToHome(){
    this.authGuard.setClientAuthenticated(false); 
    this.router.navigate(['../../../home']);
  }
}
