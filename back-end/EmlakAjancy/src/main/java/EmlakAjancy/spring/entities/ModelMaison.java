package EmlakAjancy.spring.entities;


import jakarta.persistence.*;

@Entity
public class ModelMaison extends Maison{
    
	public ModelMaison() {
		super();
	}
	public ModelMaison(String[] URLimage,String nomProjet, String adresse,String desc,String localisation,String categorie,String etat, double surface, double prix,boolean libre, int annee , int nombrePieces, boolean jardin) {
		super(URLimage,nomProjet,adresse,desc,localisation,categorie,etat,surface,prix,libre,annee,nombrePieces,jardin);
	}
	
}
