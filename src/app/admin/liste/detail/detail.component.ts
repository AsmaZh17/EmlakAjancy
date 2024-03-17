import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html', 
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  id : any;
  categorie : any;
  thead: string[] = ["id","nom","prix","marque","image",];
  typologie: any;
  currentImageIndex = 0;
  constructor(private produitService : CrudService , private act : ActivatedRoute, private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.act.params.subscribe(params => {
      this.id = params['id'];
      this.categorie = params['categorie'];
      this.produitService.getTypologie(this.id , this.categorie).subscribe({
        next: (prod: any) => {
          this.typologie = prod;
        },
        error: (err: any) => {
          console.error(err);
        }
      });
    });
  }
  changeImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.typologie.urlimage.length;
  }
  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
