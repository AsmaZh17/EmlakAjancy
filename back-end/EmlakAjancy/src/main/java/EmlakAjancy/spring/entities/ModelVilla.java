package EmlakAjancy.spring.entities;


import jakarta.persistence.*;

@Entity
public class ModelVilla extends Villa{

	public ModelVilla() {
		super();
	}
	public ModelVilla(String[] URLimage,String nomProjet, String adresse,String desc,String localisation,String categorie,String etat, double surface, double prix,boolean libre, int annee , int nombreChambres, double surfaceJardin) {
		super(URLimage,nomProjet,adresse,desc,localisation,categorie,etat,surface,prix,libre,annee,nombreChambres,surfaceJardin);
	}
	
}
