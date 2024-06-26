import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-Terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css']
})
export class TerrainComponent {
  thead: string[] = ["id","nom","prix","surface","image","hidden","action"];
  Terrain: any[] = []  ;
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder , private produitService : CrudService , private router: Router, @Inject(DOCUMENT) private document: Document  ) { 
    this.myForm = this.formBuilder.group({
      id: new FormControl('', Validators.required)
    });
  }
  ngOnInit(): void {
    this.getProductsTerrain();
  }
  
  getProductsTerrain(){
    this.produitService.getProductsTerrains().subscribe({
      next: (res) => { 
        this.Terrain = res;
      },
      error: console.log,
    })
  }
  deleteTerrain(idToDelete: any) {
    if(this.myForm.value){
      this.produitService.deleteProcuctTerrain(idToDelete).subscribe({
        next: (val: any) => {
          this.getProductsTerrain();
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
