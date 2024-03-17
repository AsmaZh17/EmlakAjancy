import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import emailjs from '@emailjs/browser';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-single-product', 
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent {
  productId: any;
  produit: any;
  Proprietaire: any;
  Form : FormGroup ;
  currentImageIndex = 0;
  constructor(private Service : CrudService , private act : ActivatedRoute , private fb:FormBuilder , private sanitizer: DomSanitizer) {
    this.Form = this.fb.group ({
      name: [''],
      to_name: ['Admin'],
      email: [''],
      phone: [''],
      subject: [''],
      message: [''],
    });
  }
  ngOnInit() {
    this.act.params.subscribe(params => {
      this.productId = params['id'];
      this.Service.getProduit(this.productId).subscribe({
        next: (res: any) => {
          this.produit = res;
          
        },
        error: (err: any) => {
          console.error(err);
        }
      });
    }); 
    this.Service.getProprietaire().subscribe({
      next: (res: any) => {
        this.Proprietaire = res[0];
      },
      error: (err: any) => {
        console.error(err);
      }
    })
  }
  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  changeImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.produit.urlimage.length;
  }
  async onSubmit() {
    emailjs.init('ELdBDcYc7IBCoFYmv');
    let reponse = await emailjs.send("service_123","template_kv1g59m",{
      name: this.Form.value.name,
      to_name: this.Form.value.to_name,
      email: this.Form.value.email,
      phone: this.Form.value.phone,
      subject: this.Form.value.subject,
      message: this.Form.value.message,
    });

    alert('Message envoyer..');
    this.Form.reset();
  }
}
