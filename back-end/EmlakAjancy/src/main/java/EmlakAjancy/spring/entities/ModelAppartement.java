package EmlakAjancy.spring.entities;


import jakarta.persistence.Entity;

@Entity
public class ModelAppartement extends Appartement{

	public ModelAppartement() {
		
	}
	
	public ModelAppartement(String[] URLimage,String nomProjet, String adresse,String desc,String localisation,String categorie,String etat, double surface, double prix,boolean libre, int annee, int nombreChambres, int etage) {
		super(URLimage,nomProjet,adresse,desc,localisation,categorie,etat,surface,prix,libre,annee, nombreChambres,etage);

	}
}
