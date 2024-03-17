package EmlakAjancy.spring.entities;


import jakarta.persistence.*;

@Entity
public class Terrain extends Typologie{
	private String typeTerrain;
    private boolean constructible;
    
	public Terrain() {
		super();
	}
	public Terrain(String[] URLimage,String nomProjet, String adresse,String desc,String localisation,String categorie,String etat, double surface, double prix,boolean libre, int annee , String type, boolean constructable) {
		super(URLimage,nomProjet,adresse,desc,localisation,categorie,etat,surface,prix,libre,annee);
		this.typeTerrain = type;
		this.constructible = constructable;
	}
	public String getTypeTerrain() {
		return typeTerrain;
	}
	public void setTypeTerrain(String typeTerrain) {
		this.typeTerrain = typeTerrain;
	}
	public boolean isConstructible() {
		return constructible;
	}
	public void setConstructible(boolean constructible) {
		this.constructible = constructible;
	}
	
	
}

