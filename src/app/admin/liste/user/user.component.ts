import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-User',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  thead: string[] = ["id","nom","prenom","email","password","action"];
  Users: any[] = [];
  Admins: any[] = [];
  myForm: FormGroup;
  constructor(@Inject(DOCUMENT) private document: Document, private formBuilder: FormBuilder , private userService : UserService , private router: Router) { 
    this.myForm = this.formBuilder.group({
      id: new FormControl('', Validators.required)
    });
  }
  ngOnInit(): void {
    this.getUsers();
  }
  
  getUsers(){
    this.userService.getUsers().subscribe({
      next: (res) => { 
        let j = 0;
        let k = 0;
        for(let i=0;i<res.length;i++){
          if(res[i].role==='User'){
            this.Users[j] = res[i];
            j++;
          }
          if(res[i].role==='Admin'){
            this.Admins[k] = res[i];
            k++;
          }
        }
      },
      error: console.log,
    })
  }
  deleteUser(idToDelete: any) {
    this.userService.deleteUser(idToDelete).subscribe({
      next: (val: any) => {        
        this.refreshPage();
      },
      error: (err: any) => {
        console.error(err);
      } 
    })
  }
  refreshPage() {
    this.document.location.reload();
  }
}
