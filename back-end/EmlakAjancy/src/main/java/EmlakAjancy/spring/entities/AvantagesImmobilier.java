package EmlakAjancy.spring.entities;

import jakarta.persistence.*;

@Entity
public class AvantagesImmobilier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
    private String nom;
    private String icon;
    private String description;
    
	public AvantagesImmobilier() {
		super();
	}

	public AvantagesImmobilier(String nom, String icon, String description) {
		super();
		this.nom = nom;
		this.icon = icon;
		this.description = description;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
    
}
