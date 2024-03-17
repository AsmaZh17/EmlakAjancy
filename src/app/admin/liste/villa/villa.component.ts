import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-Villa',
  templateUrl: './villa.component.html',
  styleUrls: ['./villa.component.css']
})
export class VillaComponent {
  thead: string[] = ["id","nom","prix","marque","image","hidden","action"];
  Villa: any[] | [] | undefined ;
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder , private produitService : CrudService , private router: Router, @Inject(DOCUMENT) private document: Document ) { 
    this.myForm = this.formBuilder.group({
      id: new FormControl('', Validators.required)
    });
  }
  ngOnInit(): void {
    this.getProductsVilla();
  }
  
  getProductsVilla(){
    this.produitService.getProductsVillas().subscribe({
      next: (res) => { 
        this.Villa = res;
      },
      error: console.log,
    })
  }
  deleteVilla(idToDelete: any) {
    if(this.myForm.value){
      this.produitService.deleteProcuctVilla(idToDelete).subscribe({
        next: (val: any) => {
          this.getProductsVilla();
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
