import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import * as bcrypt from 'bcryptjs';
import { ClientAuthGuard } from 'src/app/guards/client-auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 
  myForm : FormGroup ; 
  users: any;
  private readonly AUTH_STORAGE_KEY = 'Id_client_authenticated'; // Déclaration de la variable

  constructor(private fb: FormBuilder , private userService : UserService , private router: Router,private authGuard: ClientAuthGuard,private location: Location) { 
    this.myForm = this.fb.group ({ 
      email: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required]
    });
  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (val: any) =>{
        this.users = val;
      },
      error: (err: any) =>{
        console.error(err);
      }
    })
  }
  navigateToHome() {
    const utilisateurTrouve = this.users.find((user: { id: any; email: any; role: any; password: any; }) =>
      user.email === this.myForm.value.email &&
      user.role === "User"
    );
  
    if (utilisateurTrouve) {
      bcrypt.compare(this.myForm.value.password, utilisateurTrouve.password, (err, result) => {
        if (err) {
          console.error('Erreur lors de la comparaison des mots de passe :', err);
          alert('Une erreur s\'est produite lors de l\'authentification.');
        } else if (result) { 
          localStorage.setItem(this.AUTH_STORAGE_KEY, utilisateurTrouve.id);
          this.authGuard.setClientAuthenticated(true); 
          this.location.back();
        } else {
          alert('Mot de passe incorrect.');
        }
      });
    } else {
      alert('Aucun utilisateur trouvé avec cet email.');
    }
  } 
  navigateToSignUp() {
    this.router.navigate(['authentification/signup']);
  }
  get email(){
    return this.myForm.controls['email'];
  }
  get password(){
    return this.myForm.controls['password'];
  }
  passwordVisible = false;

togglePasswordVisibility() {
  this.passwordVisible = !this.passwordVisible;
}
}

