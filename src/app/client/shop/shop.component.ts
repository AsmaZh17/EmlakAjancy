import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements AfterViewInit {
  produit: any[] = [];
  filtred: any[] = []; 
  selectedFilter: string = '';
  categories: string[] = [];
  adresses: string[] = [];
  villes: string[] = ["Ariana","Béja","Ben Arous","Bizerte","Gabès","Gafsa","Jendouba","Kairouan","Kasserine","Kébili","Kef","Mahdia","Manouba","Médenine","Monastir","Nabeul","Sfax","Sidi Bouzid","Siliana","Sousse","Tataouine","Tozeur","Tunis","Zaghouan" ];
  constructor(private Service : CrudService,private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.getProduit();
    const input: HTMLElement | null = document.querySelector(".input-box");
    this.activatedRoute.queryParams.subscribe(params => {
      this.showSearch = params['search'];
    });
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

  onFilterChange(value: string) {
    this.selectedFilter = value;
  }
  getProduit(){
    this.Service.getProduits().subscribe({
      next: (res) => {
        this.produit = res;
        this.categories = this.getUniqueCategories(this.produit);
        this.adresses = this.getUniqueVilles(this.produit);
      },
      error: console.log,
    })
  } 
  getUniqueCategories(products: any[]): string[] {
    const uniqueCategories: string[] = [];
    products.forEach((produit) => {
      const categorie = produit.categorie;
      if (categorie && !uniqueCategories.includes(categorie)) {
        uniqueCategories.push(categorie);
      }
    });
    return uniqueCategories;
  }
  getUniqueVilles(products: any[]): string[] {
    const uniqueVilles: string[] = [];
    products.forEach((produit) => {
      const adresse = produit.adresse;
      const ville = this.villes.find(v => adresse.includes(v));
      
      if (ville && !uniqueVilles.includes(ville)) {
        uniqueVilles.push(ville);
      }
    });
    return uniqueVilles;
  }
  getProduitsFiltres(): any[] {
    this.filtred = [];
    if (this.adresseFiltre !== null) {
      this.filterByAddress();
    } else if (this.CategorieFiltre !== null) {
      this.filterByCategory();
    }
    else {
      for (let p in this.produit) {
        if(!this.produit[p].hidden){
          this.filtred.push(this.produit[p]);
        }
      }
    }
    if (this.searchQuery !== '') {
      let search: any[] = [];
      if (this.searchQuery !== undefined && this.searchQuery !== null) {    
        search = this.filterBySearchQuery(this.filtred);
      }
      return search;
    }
    return this.filtred;
  }
  adresseFiltre: string | null = null;
  filterByAddress(): void {
    if (this.adresseFiltre !== null) {
    for (let p in this.produit) {
      if (this.produit[p].adresse && this.produit[p].adresse.toLowerCase().includes(this.adresseFiltre.toLowerCase())) {
        if(!this.produit[p].hidden){
          this.filtred.push(this.produit[p]);
        }
      }
    }
  }
  }
  CategorieFiltre: string | null = null;
  filterByCategory(): void {
    if (this.CategorieFiltre !== null) {
    for (let p in this.produit) {
      if (this.produit[p].categorie && this.produit[p].categorie.toLowerCase().includes(this.CategorieFiltre.toLowerCase())) {
        if(!this.produit[p].hidden){
          this.filtred.push(this.produit[p]);
        }
      }
    }
  }
  }
  searchQuery: string = '';
  filterBySearchQuery(products: any[]): any[] {
    const searchResults: any[] = [];
    for (let i in products) {
      if (products[i].nomProjet && products[i].nomProjet.toLowerCase().includes(this.searchQuery.toLowerCase())) {
        if(!products[i].hidden){
          searchResults.push(products[i]);
        }
      }
    }
    return searchResults;
  }
  ngAfterViewInit() {
    if (this.showSearch && this.searchInput) {
      this.searchInput.nativeElement.focus();
    }
  }
  showSearch: boolean = false;
  @ViewChild('searchInput') searchInput: ElementRef | undefined;

  toggleSearch() { 
    this.showSearch = !this.showSearch;
    if (this.showSearch && this.searchInput) {
      console.log('oui');
      
      this.searchInput.nativeElement.focus();
    }
  }
}