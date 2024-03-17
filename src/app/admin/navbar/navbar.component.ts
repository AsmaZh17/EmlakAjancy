import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  produit: any[] = [];
  constructor(private Service : CrudService, private userService: UserService) {}
  categories: string[] = [];
  user: any;
  model: any;
  ngOnInit(): void {
    this.getProduit();
    this.getModel();
    this.getUser();
  }
  getModel(){
    this.Service.getModels().subscribe({
      next: (res) => {
        this.model = res;
      },
      error: console.log,
    })
  }
  getUser(){
    this.userService.getUsers().subscribe({
      next: (res) => {
        this.user = res;
      },
      error: console.log,
    })
  }
  getProduit(){
    this.Service.getProduits().subscribe({
      next: (res) => {
        this.produit = res;
        this.categories = this.getUniqueCategories(this.produit); 
      },
      error: console.log,
    })
  }
  getUniqueCategories(products: any[]): string[] {
    const uniqueCategories: string[] = [];
    products.forEach((produit) => {
      const categorie = produit.categorie;
      if (categorie  && !categorie.startsWith("model") && !uniqueCategories.includes(categorie)) {
        uniqueCategories.push(categorie);
      }
    });
    return uniqueCategories;
  }
}
