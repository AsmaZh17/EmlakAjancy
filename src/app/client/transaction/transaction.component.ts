import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { DOCUMENT } from '@angular/common';
import { CrudService } from 'src/app/services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  Form : FormGroup ;
  id:any;
  user:any;
  constructor(@Inject(DOCUMENT) private document: Document  ,private router: Router, private fb:FormBuilder , private produitService : CrudService, private act : ActivatedRoute , private userService: UserService ) {
    this.Form = this.fb.group ({
      to_name: ['Admin'],
      etat: ['Vente'], 
      adresse: ['',Validators.required],
      prix: ['',Validators.required],
      surface: ['',Validators.required],
      typologie: ['' , Validators.required],
      nomProjet: ['',Validators.required],
      localisation: ['',Validators.required],
      urlimage: [''],
      description: ['',Validators.required],
      libre: [''],
      anneeConstruction: ['',Validators.required],
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
    });
  } 
  ngOnInit(): void {
    this.act.params.subscribe(params => {
      this.id = params['id'];
      this.userService.getUser(this.id).subscribe({
        next: (res: any) => {
          this.user = res;
        }, 
        error: (err: any) => {
          console.error(err);
        }
      });
    });
    const input: HTMLElement | null = document.querySelector(".input-box");
    if (input) {
      input.onclick = function() {
        const elementClicked = this as HTMLElement;
        if (elementClicked.classList.contains("open")) {
          
          elementClicked.classList.remove("open");
      } else {
          elementClicked.classList.add("open");
      }
        const list: HTMLElement | null = elementClicked.nextElementSibling as HTMLElement;
        if (list) {
            if (list.style.maxHeight !== '') {
              list.style.maxHeight = '';
              list.style.boxShadow = '';
            } else {
                list.style.maxHeight = list.scrollHeight + "px";
                list.style.boxShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.15) , 0 1px 3px 1px rgba(0, 0, 0, 0.1)";
            }
        }
    };
    const rad: NodeListOf<HTMLElement> = document.querySelectorAll(".radio");

    Array.from(rad).forEach((item) => {
      item.addEventListener("change", ()=>{
        const nextSibling: Element | null = item.nextElementSibling;
            
            if (nextSibling) {
                input.innerHTML = nextSibling.innerHTML;
                input.click();
            }
      })
      
    });
}
  } 
  images : any[] = [];
  imageUrl = '../../assets/img/';
  selectImage(e: any){
    for(let i=0;i<e.target.files.length;i++){
      this.images[i] = e.target.files[i];
      console.log(this.images[i].name);
    }
    
  }

  async onSubmit() {
    emailjs.init('ELdBDcYc7IBCoFYmv');
    let reponse = await emailjs.send("service_add","template_m5bc5jj",{
      to_name: this.Form.value.to_name,
      etat: this.Form.value.etat,
      typologie: this.Form.value.typologie,
      nom: this.user.nom,
      prenom: this.user.prenom,
      email: this.user.email,
    });
    
    if(this.Form.valid){
        const filePaths: string[] = [];

      for (let i = 0; i < this.images.length; i++) {
        filePaths.push(this.imageUrl + this.images[i].name);
      }
      this.Form.patchValue({ urlimage: filePaths });        
        if (this.Form.value.typologie === 'Appartement') {
          this.produitService.createModelAppartement(this.Form.value).subscribe({
            next: (val: any) => {
              this.router.navigate(['../ /shop']);
              
            },
            error: (err: any) => {
              console.error(err);
            }
          })
        }
        if (this.Form.value.typologie === 'Villa') {
          this.produitService.createModelVilla(this.Form.value).subscribe({
            next: (val: any) => {
              this.router.navigate(['../ /shop']);
              
            },
            error: (err: any) => {
              console.error(err);
            }
          })
        }
        if (this.Form.value.typologie === 'Maison') {
          this.produitService.createModelMaison(this.Form.value).subscribe({
            next: (val: any) => {
              this.router.navigate(['../ /shop']);
              
            },
            error: (err: any) => {
              console.error(err);
            }
          })
        }
        if (this.Form.value.typologie === 'Ferme') {
          this.produitService.createModelFerme(this.Form.value).subscribe({
            next: (val: any) => {
              this.router.navigate(['../ /shop']);
              
            },
            error: (err: any) => {
              console.error(err);
            }
          })
        }
        if (this.Form.value.typologie === 'Parking') {
          this.produitService.createModelParking(this.Form.value).subscribe({
            next: (val: any) => {
              this.router.navigate(['../ /shop']);
              
            },
            error: (err: any) => {
              console.error(err);
            }
          })
        }
        if (this.Form.value.typologie === 'Terrain') {
          this.produitService.createModelTerrain(this.Form.value).subscribe({
            next: (val: any) => {
              this.router.navigate(['../ /shop']);
              
            },
            error: (err: any) => {
              console.error(err);
            }
          })
        }
      }
    else{
      alert("Veuillez remplir tous les champs obligatoires.");
    }
  }

  refreshPage() {
    this.document.location.reload();
  }
}
