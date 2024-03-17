package EmlakAjancy.spring.entities;


import jakarta.persistence.*;

@Entity
public class ModelFerme extends Ferme{

	public ModelFerme() {
		super();
	}
	public ModelFerme(String[] URLimage,String nomProjet, String adresse,String desc,String localisation,String categorie,String etat, double surface, double prix,boolean libre, int annee , int nombreAnimaux, String typeCulture) {
		super(URLimage,nomProjet,adresse,desc,localisation,categorie,etat,surface,prix,libre,annee,nombreAnimaux,typeCulture);

	}
	
}

