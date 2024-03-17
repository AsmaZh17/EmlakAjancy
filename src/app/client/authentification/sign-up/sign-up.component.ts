import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  productAddForm : FormGroup ; 
  id:any;
  user: any;
  private readonly AUTH_STORAGE_KEY = 'Id_client_authenticated'; // Déclaration de la variable
  constructor(private fb:FormBuilder , private userService : UserService , private router: Router) {
    this.productAddForm = this.fb.group ({
      nom: ['',Validators.required], 
      prenom: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    });
   }
   navigateToBienvenue() {
    if (this.productAddForm.valid) {
      if (this.productAddForm.value.password === this.productAddForm.value.confirmpassword) {
        const saltRounds = 10; 
        bcrypt.hash(this.productAddForm.value.password, saltRounds, (err, hashedPassword) => {
          if (err) {
            console.error('Erreur de hachage du mot de passe :', err);
          } else {
            this.userService.checkEmailExists(this.productAddForm.value.email).subscribe({
              next: (exists: boolean) => {
                if (exists) {
                  alert('Cet email existe déjà.');
                } else {
                  this.userService.createUser({...this.productAddForm.value, password: hashedPassword}).subscribe({
                    next: (val: any) => {
                      this.id = val.id;
                      localStorage.setItem(this.AUTH_STORAGE_KEY, this.id);
                      this.router.navigate(['authentification/bienvenue/' + this.id]);
                    },
                    error: (err: any) => {
                      console.error(err);
                    }
                  });
                }
              },
              error: (err: any) => {
                console.error(err);
              }
            });
          }
        });
      } else {
        alert('Confirm password non valide');
      }
    } else {
      alert('Formulaire invalide');
    }
  }
  navigateToLogin() {
    this.router.navigate(['/authentification/login']);
  }
  get email(){
    return this.productAddForm.controls['email'];
  }
  get password(){
    return this.productAddForm.controls['password'];
  }
  get nom(){
    return this.productAddForm.controls['nom'];
  }get prenom(){
    return this.productAddForm.controls['prenom'];
  }
  get confirmPassword(){
    return this.productAddForm.controls['confirmpassword'];
  }
  passwordVisible = false;
  confirmpasswordVisible = false;

togglePasswordVisibility() {
  this.passwordVisible = !this.passwordVisible;
}
toggleConfirmPasswordVisibility() {
  this.confirmpasswordVisible = !this.confirmpasswordVisible
}
}