import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-Maison',
  templateUrl: './maison.component.html',
  styleUrls: ['./maison.component.css']
})
export class MaisonComponent {
  thead: string[] = ["id","nom","prix","surface","image","hidden","action"];
  Maison: any[] = []  ;
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder , private produitService : CrudService , private router: Router, @Inject(DOCUMENT) private document: Document  ) { 
    this.myForm = this.formBuilder.group({
      id: new FormControl('', Validators.required)
    });
  }
  ngOnInit(): void {
    this.getProductsMaison();
  }
  
  getProductsMaison(){
    this.produitService.getProductsMaisons().subscribe({
      next: (res) => { 
        this.Maison = res;
      },
      error: console.log,
    })
  }
  deleteMaison(idToDelete: any) {
    if(this.myForm.value){
      this.produitService.deleteProcuctMaison(idToDelete).subscribe({
        next: (val: any) => {
          this.getProductsMaison();
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
