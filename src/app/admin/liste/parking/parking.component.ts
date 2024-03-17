import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-Parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent {
  thead: string[] = ["id","nom","prix","surface","image","hidden","action"];
  Parking: any[] = []  ;
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder , private produitService : CrudService , private router: Router, @Inject(DOCUMENT) private document: Document  ) { 
    this.myForm = this.formBuilder.group({
      id: new FormControl('', Validators.required)
    });
  }
  ngOnInit(): void {
    this.getProductsParking();
  }
  
  getProductsParking(){
    this.produitService.getProductsParking().subscribe({
      next: (res) => { 
        this.Parking = res;
      },
      error: console.log,
    })
  }
  deleteParking(idToDelete: any) {
    if(this.myForm.value){
      this.produitService.deleteProcuctParking(idToDelete).subscribe({
        next: (val: any) => {
          this.getProductsParking();
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
