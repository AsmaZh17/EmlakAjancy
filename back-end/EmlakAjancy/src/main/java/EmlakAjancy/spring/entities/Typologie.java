package EmlakAjancy.spring.entities;

import jakarta.persistence.*;

@Entity
public abstract class Typologie {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String[] URLimage = new String[10];
	private String NomProjet;
	private String Adresse;
	private String Description;
	private String localisation;
	private String categorie;
	private String etat;
	private double surface;
	private double prix;
	private int Ref;
    private static int ref_inc;
	private boolean libre;
	private int AnneeConstruction;
	private boolean hidden = false;
	@ManyToOne
	@JoinColumn(name = "proprietaire_id")
	private Proprietaire proprietaire;
	public Typologie() {}
	public Typologie(String URLimage[],String nomProjet, String adresse,String desc,String localisation,String categorie,String etat, double surface, double prix,boolean libre, int anneeConstruction) {
		this.URLimage = URLimage;
		this.NomProjet = nomProjet;
		this.Adresse = adresse;
        this.Description = desc;
		this.localisation = localisation;
		this.categorie = categorie;
		this.etat = etat;
		this.surface = surface;
		this.prix = prix;
		this.Ref = ++Typologie.ref_inc;
		this.libre = libre;
		AnneeConstruction = anneeConstruction;
	}
	public String getNomProjet() {
		return NomProjet;
	}
	public void setNomProjet(String nomProjet) {
		NomProjet = nomProjet;
	}
	public String getAdresse() {
		return Adresse;
	}
	public void setAdresse(String adresse) {
		Adresse = adresse;
	}
	public double getSurface() {
		return surface;
	}
	public void setSurface(double surface) {
		this.surface = surface;
	}
	public double getPrix() {
		return prix;
	}
	public void setPrix(double prix) {
		this.prix = prix;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String[] getURLimage() {
		if (this.URLimage == null) {
	        return new String[0]; 
	    }
		String[] images = new String[this.URLimage.length]; 
		for(int i=0;i<this.URLimage.length;i++) {
			images[i] = this.URLimage[i] + '\n';
		}
		return images;
	}
	public void setURLimage(String[] uRLimage) {
		this.URLimage = uRLimage;
	}
	public int getRef() {
		return Ref;
	}
	public void setRef(int ref) {
		Ref = ref;
	}
	public static int getRef_inc() {
		return ref_inc;
	}
	public static void setRef_inc(int ref_inc) {
		Typologie.ref_inc = ref_inc;
	}
	public boolean isLibre() {
		return libre;
	}
	public void setLibre(boolean libre) {
		this.libre = libre;
	}

	public int getAnneeConstruction() {
		return AnneeConstruction;
	}
	public void setAnneeConstruction(int anneeConstruction) {
		AnneeConstruction = anneeConstruction;
	}	
	public boolean isHidden() {
		return hidden;
	}
	public void setHidden(boolean hidden) {
		this.hidden = hidden;
	}
    public void toggleHidden() {
        this.hidden = !this.hidden;
    }
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}
	public String getLocalisation() {
		return localisation;
	}
	public void setLocalisation(String localisation) {
		this.localisation = localisation;
	}
	public String getCategorie() {
		return categorie;
	}
	public void setCategorie(String categorie) {
		this.categorie = categorie;
	}
	public String getEtat() {
		return etat;
	}
	public void setEtat(String etat) {
		this.etat = etat;
	}
	
}

