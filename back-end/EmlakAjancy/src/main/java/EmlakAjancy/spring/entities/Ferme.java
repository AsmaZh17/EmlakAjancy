package EmlakAjancy.spring.entities;


import jakarta.persistence.*;

@Entity
public class Ferme extends Typologie{
	private int nombreAnimaux;
    private String typeCulture;
    
	public Ferme() {
		super();
	}
	public Ferme(String[] URLimage,String nomProjet, String adresse,String desc,String localisation,String categorie,String etat, double surface, double prix,boolean libre, int annee , int nombreAnimaux, String typeCulture) {
		super(URLimage,nomProjet,adresse,desc,localisation,categorie,etat,surface,prix,libre,annee);
		this.nombreAnimaux = nombreAnimaux;
        this.typeCulture = typeCulture;
	}
	public int getNombreAnimaux() {
		return nombreAnimaux;
	}
	public void setNombreAnimaux(int nombreAnimaux) {
		this.nombreAnimaux = nombreAnimaux;
	}
	public String getTypeCulture() {
		return typeCulture;
	}
	public void setTypeCulture(String typeCulture) {
		this.typeCulture = typeCulture;
	}
	
}

