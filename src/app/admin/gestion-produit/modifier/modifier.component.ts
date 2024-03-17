import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent {
  id : any;
  categorie : any;
  editForm : FormGroup ; 
  constructor(private fb:FormBuilder , private produitService : CrudService , private router: Router, private act : ActivatedRoute) {
    this.editForm = this.fb.group ({
      etat: [''],
      nomProjet: [''],
      adresse: [''],
      localisation: [''],
      surface: [''],
      urlimage: [''],
      prix: [''], 
      description: [''],
      libre: [''],
      anneeConstruction: [''],
      categorie: ['', Validators.required],
      nombreChambres: [''],
      etage: [''],
      surfaceJardin: [''],
      nombrePieces: [''],
      jardin: [''],
      nombrePlaces: [''],
      couvert: [''],
      nombreAnimaux: [''],
      typeCulture: [''],
      typeTerrain: [''],
      constructible: ['']
    });
  }
   ngOnInit() {
    this.act.params.subscribe(params => {
      this.id = params['id'];
      this.categorie = params['categorie'];
      this.produitService.getTypologie(this.id, this.categorie).subscribe({
        next: (prod: any) => {
          this.editForm.patchValue(prod);
        }, 
        error: (err: any) => {
          console.error(err);
        }
      });
    });
  }
  image : any[] = [];
  imageUrl = '../../assets/img/';
  selectImage(e: any){
    for(let i=0;i<e.target.files.length;i++){
      this.image[i] = e.target.files[i];
      console.log(this.image[i].name);
    }
    
  }
  onSubmit() {
    if (this.editForm.valid) {
      const filePaths: string[] = [];
      const baseUrl = this.imageUrl || '';
      const existingPaths = Array.isArray(this.editForm.value.urlimage) ? this.editForm.value.urlimage : [];
  
      for (let i = 0; i < this.image.length; i++) {
        const filePath = baseUrl + this.image[i].name;
        filePaths.push(filePath);
      }
      const updatedPaths = existingPaths.concat(filePaths);
      this.editForm.patchValue({ urlimage: updatedPaths });

      console.log(this.editForm.value.urlimage);
      if (this.categorie === 'Appartement') {
        this.produitService.updateAppartement(this.editForm.value, this.id).subscribe({
          next: () => {
            this.router.navigate(['admin/liste/Appartement']);
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      }
      if (this.categorie === 'Villa') {
        this.produitService.updateVilla(this.editForm.value, this.id).subscribe({
          next: () => {
            this.router.navigate(['admin/liste/Villa']);
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      }
      if (this.categorie === 'Ferme') {
        this.produitService.updateFerme(this.editForm.value, this.id).subscribe({
          next: () => {
            this.router.navigate(['admin/liste/Ferme']);
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      }
      if (this.categorie === 'Maison') {
        this.produitService.updateMaison(this.editForm.value, this.id).subscribe({
          next: () => {
            this.router.navigate(['admin/liste/Maison']);
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      }
      if (this.categorie === 'Parking') {
        this.produitService.updateParking(this.editForm.value, this.id).subscribe({
          next: () => {
            this.router.navigate(['admin/liste/Parking']);
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      }
      if (this.categorie === 'Terrain') {
        this.produitService.updateTerrain(this.editForm.value, this.id).subscribe({
          next: () => {
            this.router.navigate(['admin/liste/Terrain']);
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      }
  }
  }
}
