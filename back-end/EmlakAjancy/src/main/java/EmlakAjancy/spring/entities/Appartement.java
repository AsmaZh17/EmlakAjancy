package EmlakAjancy.spring.entities;


import jakarta.persistence.*;

@Entity
public class Appartement extends Typologie{
    private int nombreChambres;
    private int etage;
    
	public Appartement() {
		super();
	}
	public Appartement(String[] URLimage,String nomProjet, String adresse,String desc,String localisation,String categorie,String etat, double surface, double prix,boolean libre, int annee, int nombreChambres, int etage) {
		super(URLimage,nomProjet,adresse,desc,localisation,categorie,etat,surface,prix,libre,annee);
        this.nombreChambres = nombreChambres;
        this.etage = etage;
	}
	public int getNombreChambres() {
		return nombreChambres;
	}
	public void setNombreChambres(int nombreChambres) {
		this.nombreChambres = nombreChambres;
	}
	public int getEtage() {
		return etage;
	}
	public void setEtage(int etage) {
		this.etage = etage;
	}
	
	
}
