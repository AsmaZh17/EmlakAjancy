import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
 produitUrl: string = 'http://localhost:8000';

 httpOptions = {
 headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
 constructor(private http: HttpClient) { }
 //read
  getProduits(): Observable<any> {
    return this.http.get(this.produitUrl+'/all');
  } 
  getWhy(): Observable<any> { 
    return this.http.get('http://localhost:8000/avantages');
  }
  getProprietaire(): Observable<any> { 
    return this.http.get('http://localhost:8000/proprietaire');
  }
  getProductsAppartements(): Observable<any> {
    return this.http.get(this.produitUrl + '/appartement');
  }
  getProductsVillas(): Observable<any> {
    return this.http.get(this.produitUrl + '/villa');
  }
  getProductsFermes(): Observable<any> {
    return this.http.get(this.produitUrl + '/ferme');
  }
  getProductsMaisons(): Observable<any> {
    return this.http.get(this.produitUrl + '/maison');
  }
  getProductsParking(): Observable<any> {
    return this.http.get(this.produitUrl + '/parking');
  }
  getProductsTerrains(): Observable<any> {
    return this.http.get(this.produitUrl + '/terrain');
  }
  getModels(): Observable<any> {
    return this.http.get(this.produitUrl + '/model');
  }
  //get par id
  getProduit(id: any): Observable<any> {
    return this.http.get(this.produitUrl+'/all/'+ id);
  }
  getTypologie(id: any , categorie: any): Observable<any> {
    if (categorie  === 'Appartement') {
      return this.http.get(this.produitUrl+'/appartement/'+ id);
    }
    if (categorie  === 'Villa') {
      return this.http.get(this.produitUrl+'/villa/'+id);
    }
    if (categorie  === 'Ferme') {
      return this.http.get(this.produitUrl+'/ferme/'+id);
    }
    if (categorie  === 'Maison') {
      return this.http.get(this.produitUrl+'/maison/'+id);
    }
    if (categorie  === 'Parking') {
      return this.http.get(this.produitUrl+'/parking/'+id);
    }
    if (categorie  === 'Terrain') {
      return this.http.get(this.produitUrl+'/terrain/'+id);
    }
    if (categorie  === 'modelAppartement') {
      return this.http.get(this.produitUrl+'/modelAppartement/'+ id);
    }
    if (categorie  === 'modelVilla') {
      return this.http.get(this.produitUrl+'/modelVilla/'+id);
    }
    if (categorie  === 'modelFerme') {
      return this.http.get(this.produitUrl+'/modelFerme/'+id);
    }
    if (categorie  === 'modelMaison') {
      return this.http.get(this.produitUrl+'/modelMaison/'+id);
    }
    if (categorie  === 'modelParking') {
      return this.http.get(this.produitUrl+'/modelParking/'+id);
    }
    if (categorie  === 'modelTerrain') {
      return this.http.get(this.produitUrl+'/modelTerrain/'+id);
    }
    throw new Error('Categorie non valide ou ID non trouvé.'); 
  }
  //create
  createProduit(newProduit:any): Observable<any> {
    return this.http.post(this.produitUrl+'/maison/' , newProduit);
  }
  createProductAppartement(newProduit:any): Observable<any> {
    return this.http.post(this.produitUrl+'/appartement' , newProduit);
  }
  createModelAppartement(newProduit:any): Observable<any> {
    return this.http.post(this.produitUrl+'/modelAppartement' , newProduit);
  }
  createProductVilla(newProduit:any): Observable<any> {
    return this.http.post(this.produitUrl+'/villa' , newProduit);
  }
  createModelVilla(newProduit:any): Observable<any> {
    return this.http.post(this.produitUrl+'/modelVilla' , newProduit);
  }
  createProductFerme(newProduit:any): Observable<any> {
    return this.http.post(this.produitUrl+'/ferme' , newProduit);
  }
  createModelFerme(newProduit:any): Observable<any> {
    return this.http.post(this.produitUrl+'/modelFerme' , newProduit);
  }
  createProductMaison(newProduit:any): Observable<any> {
    return this.http.post(this.produitUrl+'/maison' , newProduit);
  }
  createModelMaison(newProduit:any): Observable<any> {
    return this.http.post(this.produitUrl+'/modelMaison' , newProduit);
  }
  createProductParking(newProduit:any): Observable<any> {
    return this.http.post(this.produitUrl+'/parking' , newProduit);
  }
  createModelParking(newProduit:any): Observable<any> {
    return this.http.post(this.produitUrl+'/modelParking' , newProduit);
  }
  createProductTerrain(newProduit:any): Observable<any> {
    return this.http.post(this.produitUrl+'/terrain' , newProduit);
  }
  createModelTerrain(newProduit:any): Observable<any> {
    return this.http.post(this.produitUrl+'/modelTerrain' , newProduit);
  }
  //detete  
  deleteModel(id: any): Observable<any> {
    return this.http.delete(this.produitUrl+'/model/'+id);
  }
  deleteProcuctAppartement(id: any): Observable<any> {
    return this.http.delete(this.produitUrl+'/appartement/'+id);
  }
  deleteProcuctVilla(id: any): Observable<any> {
    return this.http.delete(this.produitUrl+'/villa/'+id);
  }
  deleteProcuctFerme(id: any): Observable<any> {
    return this.http.delete(this.produitUrl+'/ferme/'+id);
  }
  deleteProcuctMaison(id: any): Observable<any> {
    return this.http.delete(this.produitUrl+'/maison/'+id);
  }
  deleteProcuctParking(id: any): Observable<any> {
    return this.http.delete(this.produitUrl+'/parking/'+id);
  }
  deleteProcuctTerrain(id: any): Observable<any> {
    return this.http.delete(this.produitUrl+'/terrain/'+id);
  }
  //update
  updateAppartement(data :any,id: number): Observable<any> { 
    return this.http.put(this.produitUrl+'/appartement/'+id, data);
  }
  updateVilla(data :any,id: number): Observable<any> {
    return this.http.put(this.produitUrl+'/villa/'+id, data);
  }
  updateFerme(data :any,id: number): Observable<any> {
    return this.http.put(this.produitUrl+'/ferme/'+id, data);
  }
  updateMaison(data :any,id: number): Observable<any> {
    return this.http.put(this.produitUrl+'/maison/'+id, data);
  }
  updateParking(data :any,id: number): Observable<any> {
    return this.http.put(this.produitUrl+'/parking/'+id, data);
  }
  updateTerrain(data :any,id: number): Observable<any> {
    return this.http.put(this.produitUrl+'/terrain/'+id, data);
  }
  updateHidden(id: number): Observable<any> {
    return this.http.put(this.produitUrl+'/hidden/'+id , {});
  }
}