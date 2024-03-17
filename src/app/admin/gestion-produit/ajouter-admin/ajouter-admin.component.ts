import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-ajouter-admin',
  templateUrl: './ajouter-admin.component.html',
  styleUrls: ['./ajouter-admin.component.css'] 
})
export class AjouterAdminComponent{
  productAddForm : FormGroup ; 
  id:any;
  user: any;
  constructor(private fb:FormBuilder , private userService : UserService , private router: Router) {
    this.productAddForm = this.fb.group ({
      nom: ['',Validators.required], 
      prenom: ['',Validators.required],
      adresse: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      instagram: ['',Validators.required],
      facebook: ['',Validators.required],
      telephone: ['',Validators.required],
      whatsapp: ['',Validators.required],
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
                  this.userService.createAdmin({...this.productAddForm.value, password: hashedPassword}).subscribe({
                    next: (val: any) => {
                      this.id = val.id;
                      this.router.navigate(['admin/homeadm/']);
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
  passwordVisible = false;
  confirmpasswordVisible = false;

togglePasswordVisibility() {
  this.passwordVisible = !this.passwordVisible;
}
toggleConfirmPasswordVisibility() {
  this.confirmpasswordVisible = !this.confirmpasswordVisible
}
}