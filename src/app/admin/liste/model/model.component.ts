import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-Model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent {
  thead: string[] = ["categorie","nom",'etat',"prix","surface","action"];
  Model: any = [] ;
  constructor(private produitService : CrudService , private router: Router) {}
  ngOnInit(): void {
    this.getProducts();
  }
  
  getProducts(){
    this.produitService.getModels().subscribe({
      next: (res) => { 
        this.Model = res;
      },
      error: console.log,
    })
  }
  delete(idToDelete: any) {
    this.produitService.deleteModel(idToDelete).subscribe({
      next: (val: any) => {
        this.getProducts();
      },
      error: (err: any) => {
        console.error(err);
      } 
    })
  }
  Ajouter(id:any,i: any) {
    if (this.Model[i].categorie === 'modelAppartement') {
      this.Model[i].categorie = 'Appartement';
      this.produitService.createProductAppartement(this.Model[i]).subscribe({
        next: (val: any) => {
          this.delete(id);
          this.router.navigate(['admin/liste/Appartement']);
        },
        error: (err: any) => {
          console.error(err);
        }
      })
    }
    if (this.Model[i].categorie === 'modelFerme') {
      this.Model[i].categorie = 'Ferme';
      this.produitService.createProductFerme(this.Model[i]).subscribe({
        next: (val: any) => {
          this.delete(id);
          this.router.navigate(['admin/liste/Ferme']);
        },
        error: (err: any) => {
          console.error(err);
        }
      })
    }
    if (this.Model[i].categorie === 'modelMaison') {
      this.Model[i].categorie = 'Maison';
      this.produitService.createProductMaison(this.Model[i]).subscribe({
        next: (val: any) => {
          this.delete(id);
          this.router.navigate(['admin/liste/Maison']);
        },
        error: (err: any) => {
          console.error(err);
        }
      })
    }
    if (this.Model[i].categorie === 'modelVilla') {
      this.Model[i].categorie = 'Villa';
      this.produitService.createProductVilla(this.Model[i]).subscribe({
        next: (val: any) => {
          this.delete(id);
          this.router.navigate(['admin/liste/Villa']);
        },
        error: (err: any) => {
          console.error(err);
        }
      })
    }
    if (this.Model[i].categorie === 'modelParking') {
      this.Model[i].categorie = 'Parking';
      this.produitService.createProductParking(this.Model[i]).subscribe({
        next: (val: any) => {
          this.delete(id);
          this.router.navigate(['admin/liste/Parking']);
        },
        error: (err: any) => {
          console.error(err);
        }
      })
    }
    if (this.Model[i].categorie === 'modelTerrain') {
      this.Model[i].categorie = 'Terrain';
      this.produitService.createProductTerrain(this.Model[i]).subscribe({
        next: (val: any) => {
          this.delete(id);
          this.router.navigate(['admin/liste/Terrain']);
        },
        error: (err: any) => {
          console.error(err);
        }
      })
    }
  }
}
