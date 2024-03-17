import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import * as bcrypt from 'bcryptjs';
import { AuthGuard } from 'src/app/guards/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myForm : FormGroup ; 
  errorMessage: string | undefined;
  users: any;
  constructor(private fb: FormBuilder , private userService : UserService , private router: Router,private authGuard: AuthGuard) { 
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
  submit(){
    const utilisateurTrouve = this.users.find((user: { id: any; email: any; password: any; }) =>
      user.email === this.myForm.value.email
    );
  
    if (utilisateurTrouve) {
      bcrypt.compare(this.myForm.value.password, utilisateurTrouve.password, (err, result) => {
        if (err) {
          console.error('Erreur lors de la comparaison des mots de passe :', err);
          alert('Une erreur s\'est produite lors de l\'authentification.');
        } else if (result) {
          if(utilisateurTrouve.role === 'Admin'){ 
            this.authGuard.setAdminAuthenticated(true); 
            this.router.navigate(['admin/homeadm']);
          }
          else{
            alert('Vous n\'est pas un administrateur');
          }
        } else {
          alert('Mot de passe incorrect.');
        }
      });
    } else {
      alert('Aucun utilisateur trouvé avec cet email.');
    }
  }
  navigateToHome() {
    this.router.navigate(['home']);
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

