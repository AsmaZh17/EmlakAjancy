package EmlakAjancy.spring.entities;


import jakarta.persistence.*;

@Entity
public class ModelTerrain extends Terrain{
    
	public ModelTerrain() {
		super();
	}
	public ModelTerrain(String[] URLimage,String nomProjet, String adresse,String desc,String localisation,String categorie,String etat, double surface, double prix,boolean libre, int annee , String type, boolean constructable) {
		super(URLimage,nomProjet,adresse,desc,localisation,categorie,etat,surface,prix,libre,annee,type,constructable);
	}
	
}

