import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-Ferme',
  templateUrl: './ferme.component.html',
  styleUrls: ['./ferme.component.css']
})
export class FermeComponent {
  thead: string[] = ["id","nom","prix","surface","image","hidden","action"];
  Ferme: any[] = []  ;
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder , private produitService : CrudService , private router: Router, @Inject(DOCUMENT) private document: Document  ) { 
    this.myForm = this.formBuilder.group({
      id: new FormControl('', Validators.required)
    });
  }
  ngOnInit(): void {
    this.getProductsFerme();
  }
  
  getProductsFerme(){
    this.produitService.getProductsFermes().subscribe({
      next: (res) => { 
        this.Ferme = res;
      },
      error: console.log,
    })
  }
  deleteFerme(idToDelete: any) {
    if(this.myForm.value){
      this.produitService.deleteProcuctFerme(idToDelete).subscribe({
        next: (val: any) => {
          this.getProductsFerme();
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
