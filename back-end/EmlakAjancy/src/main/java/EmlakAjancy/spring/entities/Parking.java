package EmlakAjancy.spring.entities;


import jakarta.persistence.*;

@Entity
public class Parking extends Typologie{
	private int nombrePlaces;
    private boolean couvert;
    
	public Parking() {
		super();
	}
	public Parking(String[] URLimage,String nomProjet, String adresse,String desc,String localisation,String categorie,String etat, double surface, double prix,boolean libre, int annee , int nombrePlaces, boolean couvert) {
		super(URLimage,nomProjet,adresse,desc,localisation,categorie,etat,surface,prix,libre,annee);
		this.nombrePlaces = nombrePlaces;
        this.couvert = couvert;
	}
	public int getNombrePlaces() {
		return nombrePlaces;
	}
	public void setNombrePlaces(int nombrePlaces) {
		this.nombrePlaces = nombrePlaces;
	}
	public boolean isCouvert() {
		return couvert;
	}
	public void setCouvert(boolean couvert) {
		this.couvert = couvert;
	}
	
}

