import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../guards/auth.guard';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{
  constructor(private authGuard: AuthGuard){}
  
  ngOnInit() {
    this.authGuard.setAdminAuthenticated(false); 
  }
}
