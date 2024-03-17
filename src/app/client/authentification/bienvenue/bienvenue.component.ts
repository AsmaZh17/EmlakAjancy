import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.component.html',
  styleUrls: ['./bienvenue.component.css']
})
export class BienvenueComponent{
  id: any;
  user: any;
  constructor(private router: Router, private act : ActivatedRoute, private userService: UserService) {} 
  ngOnInit() {
    this.act.params.subscribe(params => {
      this.id = params['id'];
      this.userService.getUser(this.id).subscribe({
        next: (res: any) => { 
          this.user = res;
        }, 
        error: (err: any) => {
          console.error(err);
        }
      });
    });
  }
  navigateToHome(){
    this.router.navigate(['../../../home']);
  }
}
