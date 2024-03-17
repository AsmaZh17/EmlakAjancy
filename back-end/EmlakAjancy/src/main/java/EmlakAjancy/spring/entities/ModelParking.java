package EmlakAjancy.spring.entities;


import jakarta.persistence.*;

@Entity
public class ModelParking extends Parking{
    
	public ModelParking() {
		super();
	}
	public ModelParking(String[] URLimage,String nomProjet, String adresse,String desc,String localisation,String categorie,String etat, double surface, double prix,boolean libre, int annee , int nombrePlaces, boolean couvert) {
		super(URLimage,nomProjet,adresse,desc,localisation,categorie,etat,surface,prix,libre,annee,nombrePlaces,couvert);
	}
	
}

