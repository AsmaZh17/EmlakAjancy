import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-Appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.css']
})
export class AppartementComponent {
  thead: string[] = ["id","nom","prix","surface","image","hidden","action"];
  Appartement: any[] = []  ;
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder , private produitService : CrudService , private router: Router, @Inject(DOCUMENT) private document: Document  ) { 
    this.myForm = this.formBuilder.group({
      id: new FormControl('', Validators.required)
    });
  }
  ngOnInit(): void {
    this.getProductsAppartement();
  }
  
  getProductsAppartement(){
    this.produitService.getProductsAppartements().subscribe({
      next: (res) => { 
        this.Appartement = res;
      },
      error: console.log,
    })
  }
  deleteAppartement(idToDelete: any) {
    if(this.myForm.value){
      this.produitService.deleteProcuctAppartement(idToDelete).subscribe({
        next: (val: any) => {
          this.getProductsAppartement();
        },
        error: (err: any) => {
          console.error(err);
        } 
      })
    }
  }
  isHidden: boolean = false;
  toggleHidden(id: any) {
    this.produitService.updateHidden(id).subscribe({
      next: (val: any) => {
        console.log('update');
        this.document.location.reload();
      },
      error: (err: any) => {
        console.error(err);
      } 
    })
  }
}
