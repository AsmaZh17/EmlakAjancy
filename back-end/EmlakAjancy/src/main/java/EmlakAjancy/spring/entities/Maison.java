package EmlakAjancy.spring.entities;


import jakarta.persistence.*;

@Entity
public class Maison extends Typologie{
	private int nombrePieces;
    private boolean jardin;
    
	public Maison() {
		super();
	}
	public Maison(String[] URLimage,String nomProjet, String adresse,String desc,String localisation,String categorie,String etat, double surface, double prix,boolean libre, int annee , int nombrePieces, boolean jardin) {
		super(URLimage,nomProjet,adresse,desc,localisation,categorie,etat,surface,prix,libre,annee);
        this.nombrePieces = nombrePieces;
        this.jardin = jardin;
	}
	public int getNombrePieces() {
		return nombrePieces;
	}
	public void setNombrePieces(int nombrePieces) {
		this.nombrePieces = nombrePieces;
	}
	public boolean isJardin() {
		return jardin;
	}
	public void setJardin(boolean jardin) {
		this.jardin = jardin;
	}
	
	
}
