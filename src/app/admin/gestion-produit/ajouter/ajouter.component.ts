import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css'] 
})
export class AjouterComponent{
  productAddForm : FormGroup ; 
  constructor(private fb:FormBuilder , private produitService : CrudService , private router: Router) {
    this.productAddForm = this.fb.group ({
      etat: ['Vente'],
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
      constructible: [''],
      proprietaire_id: ['1'],
    });
  }
  ngOnInit(): void {
    if(this.productAddForm.valid){
      this.productAddForm.value.categorie.valueChanges.subscribe((category: string) => {
        if (category === 'Appartement') {
          this.productAddForm.addControl('nombreChambres', this.fb.control(''));
          this.productAddForm.addControl('etage', this.fb.control(''));
        } else if (category === 'Villa') {
          this.productAddForm.addControl('nombreChambres', this.fb.control(''));
          this.productAddForm.addControl('surfaceJardin', this.fb.control(''));
        }
      });
    }
  }
  image : any[] = [];
  imageUrl = '../../assets/img/Residence/';
  selectImage(e: any){
    for(let i=0;i<e.target.files.length;i++){
      this.image[i] = e.target.files[i];
      console.log(this.image[i].name);
    }
    
  } 
  onSubmit() {
    if(this.productAddForm.valid){
      const filePaths: string[] = []; 

    for (let i = 0; i < this.image.length; i++) {
      const filePath = this.imageUrl + this.image[i].name;
      filePaths.push(filePath);
    }
    this.productAddForm.patchValue({ urlimage: filePaths });

      console.log(this.productAddForm.value.urlimage);
      
      if (this.productAddForm.value.categorie === 'Appartement') {
        this.produitService.createProductAppartement(this.productAddForm.value).subscribe({
          next: (val: any) => {
            this.router.navigate(['admin/liste/Appartement']);
          },
          error: (err: any) => {
            console.error(err);
          }
        })
      }
      if (this.productAddForm.value.categorie === 'Villa') {
        this.produitService.createProductVilla(this.productAddForm.value).subscribe({
          next: (val: any) => {
            this.router.navigate(['admin/liste/Villa']);
          },
          error: (err: any) => {
            console.error(err);
          }
        })
      }
      if (this.productAddForm.value.categorie === 'Ferme') {
        this.produitService.createProductFerme(this.productAddForm.value).subscribe({
          next: (val: any) => {
            this.router.navigate(['admin/liste/Ferme']);
          },
          error: (err: any) => {
            console.error(err);
          }
        })
      }
      if (this.productAddForm.value.categorie === 'Maison') {
        this.produitService.createProductMaison(this.productAddForm.value).subscribe({
          next: (val: any) => {
            this.router.navigate(['admin/liste/Maison']);
          },
          error: (err: any) => {
            console.error(err);
          }
        })
      }
      if (this.productAddForm.value.categorie === 'Parking') {
        this.produitService.createProductParking(this.productAddForm.value).subscribe({
          next: (val: any) => {
            this.router.navigate(['admin/liste/Parking']);
          },
          error: (err: any) => {
            console.error(err);
          }
        })
      }
      if (this.productAddForm.value.categorie === 'Terrain') {
        this.produitService.createProductTerrain(this.productAddForm.value).subscribe({
          next: (val: any) => {
            this.router.navigate(['admin/liste/Terrain']);
          },
          error: (err: any) => {
            console.error(err);
          }
        }) 
      }
    }
    else{
      alert("Categorie non montionné");
    }
  }
}