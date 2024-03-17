package EmlakAjancy.spring.entities;


import jakarta.persistence.*;

@Entity
public class Villa extends Typologie{
	 private int nombreChambres;
	 private double surfaceJardin; 
	    
	public Villa() {
		super();
	}
	public Villa(String[] URLimage,String nomProjet, String adresse,String desc,String localisation,String categorie,String etat, double surface, double prix,boolean libre, int annee , int nombreChambres, double surfaceJardin) {
		super(URLimage,nomProjet,adresse,desc,localisation,categorie,etat,surface,prix,libre,annee);
		this.nombreChambres = nombreChambres;
        this.surfaceJardin = surfaceJardin;
	}
	public int getNombreChambres() {
		return nombreChambres;
	}
	public void setNombreChambres(int nombreChambres) {
		this.nombreChambres = nombreChambres;
	}
	public double getSurfaceJardin() {
		return surfaceJardin;
	}
	public void setSurfaceJardin(double surfaceJardin) {
		this.surfaceJardin = surfaceJardin;
	}
	
	
}
