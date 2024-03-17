package EmlakAjancy.spring.entities;

import jakarta.persistence.*;

@Entity
public class Proprietaire extends User{

    private String adresse;
    private String whatsapp;
    private String facebook;
    private String telephone;
    
	public Proprietaire() {
		super();
	}
	public Proprietaire(String nom,String prenom, String adresse, String email,String role, String whatsapp, String facebook, String telephone,String password) {
		super(nom,prenom,email,password,role);
		this.adresse = adresse;
		this.whatsapp = whatsapp;
		this.facebook = facebook;
		this.telephone = telephone;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getWhatsapp() {
		return whatsapp;
	}

	public void setWhatsapp(String whatsapp) {
		this.whatsapp = whatsapp;
	}

	public String getFacebook() {
		return facebook;
	}

	public void setFacebook(String facebook) {
		this.facebook = facebook;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}
	public String toString() {
		return super.toString() + "Proprietaire [adresse=" + adresse + ", whatsapp=" + whatsapp + ", facebook=" + facebook + ", telephone="
				+ telephone + "]";
	}
    
}
