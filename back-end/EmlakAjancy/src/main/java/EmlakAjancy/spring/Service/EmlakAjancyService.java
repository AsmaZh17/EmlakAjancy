package EmlakAjancy.spring.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import EmlakAjancy.spring.Repository.*;
import EmlakAjancy.spring.entities.*;

import java.util.ArrayList;
@Service
public class EmlakAjancyService {
	
	@Autowired
	private ResidenceRepository Repository;

	@Autowired
	private AvantagesRepository AvantageRepository;
	
	@Autowired
	private ProprietaireRepository ProprietaireRepository;

	@Autowired
	private UserRepository UserRepository;
	public Proprietaire addProprietaire(Proprietaire p) {
		Proprietaire prop = new Proprietaire(
				p.getNom(),
				p.getPrenom(),
				p.getAdresse(),
				p.getEmail(),
				"Admin",
				p.getWhatsapp(),
				p.getFacebook(),
				p.getTelephone(),
				p.getPassword()
		);
		System.out.println(prop.toString());
		ProprietaireRepository.save(prop);
		return prop;
	}
	public ArrayList<User> getProprietaire() {
    	ArrayList<User> users = new ArrayList<>();
    	UserRepository.findAll().forEach(user -> {
    		if (user instanceof Proprietaire) {
    			users.add(user);	
	        }
    	});
        return users;
    }
	public ArrayList<User> getUsers() {
    	ArrayList<User> users = new ArrayList<>();
    	UserRepository.findAll().forEach(user -> {
    		users.add(user);
    	});
        return users;
    }
	public User getUser(int id) {
        return UserRepository.findById(id).orElse(null);
    }
	public User getUserByEmail(String email) {
        return UserRepository.findByEmail(email);
    }
	public User addUser(User u) {
		User user = new User(
				u.getNom(),
				u.getPrenom(),
				u.getEmail(),
				u.getPassword(),
				"User"
		);
		UserRepository.save(user);
		return user;
	}
	public void deleteUser(int id) {
    	UserRepository.deleteById(id);
    }
	public void updateUser(User u , int id) {
		User userToUpdate = UserRepository.findById(id).get();
	    userToUpdate.setNom(u.getNom());
	    userToUpdate.setPrenom(u.getPrenom());
	    userToUpdate.setEmail(u.getEmail());
	    userToUpdate.setPassword(u.getPassword());
	    UserRepository.save(userToUpdate);
	}
	
    public ArrayList<AvantagesImmobilier> getAvantages() {
    	ArrayList<AvantagesImmobilier> avantages = new ArrayList<>();
    	AvantageRepository.findAll().forEach(avantage -> {
    		avantages.add(avantage);
    	});
        return avantages;
    }
	public void addAvantage(AvantagesImmobilier a) {
		AvantageRepository.save(a);
	}
	public ArrayList<Typologie> getAll(){
		ArrayList<Typologie> all = new ArrayList<>();
		Repository.findAll().forEach(a -> {
			all.add(a);
		});
	    return all;
	}
	public Typologie get(int id) {
        return Repository.findById(id).orElse(null);
    }
	public void addModelAppartement(ModelAppartement a){
		ModelAppartement m = new ModelAppartement(
				a.getURLimage(),
				a.getNomProjet(),
				a.getAdresse(),
				a.getDescription(),
				a.getLocalisation(),
				"modelAppartement",
				a.getEtat(),
				a.getSurface(),
				a.getPrix(),
				a.isLibre(),
				a.getAnneeConstruction(),
				a.getNombreChambres(),
				a.getEtage()
		);
		m.setHidden(true);
		Repository.save(m);
	}
	public void addAppartement(Appartement a){
		Appartement m = new Appartement(
				a.getURLimage(),
				a.getNomProjet(),
				a.getAdresse(),
				a.getDescription(),
				a.getLocalisation(),
				"Appartement",
				a.getEtat(),
				a.getSurface(),
				a.getPrix(),
				a.isLibre(),
				a.getAnneeConstruction(),
				a.getNombreChambres(),
				a.getEtage()
		);
		Repository.save(m);
	}
	public void addModelVilla(ModelVilla a){
		ModelVilla m = new ModelVilla(
				a.getURLimage(),
				a.getNomProjet(),
				a.getAdresse(),
				a.getDescription(),
				a.getLocalisation(),
				"modelVilla",
				a.getEtat(),
				a.getSurface(),
				a.getPrix(),
				a.isLibre(),
				a.getAnneeConstruction(),
				a.getNombreChambres(),
				a.getSurfaceJardin()
		);
		m.setHidden(true);
		Repository.save(m);
	}
	public void addVilla(Villa a){
		Villa m = new Villa(
				a.getURLimage(),
				a.getNomProjet(),
				a.getAdresse(),
				a.getDescription(),
				a.getLocalisation(),
				"Villa",
				a.getEtat(),
				a.getSurface(),
				a.getPrix(),
				a.isLibre(),
				a.getAnneeConstruction(),
				a.getNombreChambres(),
				a.getSurfaceJardin()
		);
		Repository.save(m);
	}
	public void addModelFerme(ModelFerme ferme){
		ModelFerme f = new ModelFerme(
				ferme.getURLimage(),
				ferme.getNomProjet(),
				ferme.getAdresse(),
				ferme.getDescription(),
				ferme.getLocalisation(),
				"modelFerme",
				ferme.getEtat(),
				ferme.getSurface(),
				ferme.getPrix(),
				ferme.isLibre(),
				ferme.getAnneeConstruction(),
				ferme.getNombreAnimaux(),
				ferme.getTypeCulture()
		);
		f.setHidden(true);
		Repository.save(f);
	}
	public void addFerme(Ferme ferme){
		Ferme f = new Ferme(
				ferme.getURLimage(),
				ferme.getNomProjet(),
				ferme.getAdresse(),
				ferme.getDescription(),
				ferme.getLocalisation(),
				"Ferme",
				ferme.getEtat(),
				ferme.getSurface(),
				ferme.getPrix(),
				ferme.isLibre(),
				ferme.getAnneeConstruction(),
				ferme.getNombreAnimaux(),
				ferme.getTypeCulture()
		);
		Repository.save(f);
	}
	public void addModelMaison(ModelMaison maison){
		ModelMaison m = new ModelMaison(
				maison.getURLimage(),
				maison.getNomProjet(),
				maison.getAdresse(),
				maison.getDescription(),
				maison.getLocalisation(),
				"modelMaison",
				maison.getEtat(),
				maison.getSurface(),
				maison.getPrix(),
				maison.isLibre(),
				maison.getAnneeConstruction(),
				maison.getNombrePieces(),
				maison.isJardin()
		);
		m.setHidden(true);
		Repository.save(m);
	}
	public void addMaison(Maison maison){
		Maison m = new Maison(
				maison.getURLimage(),
				maison.getNomProjet(),
				maison.getAdresse(),
				maison.getDescription(),
				maison.getLocalisation(),
				"Maison",
				maison.getEtat(),
				maison.getSurface(),
				maison.getPrix(),
				maison.isLibre(),
				maison.getAnneeConstruction(),
				maison.getNombrePieces(),
				maison.isJardin()
		);
		Repository.save(m);
	}
	public void addModelParking(ModelParking parking){
		ModelParking p = new ModelParking(
				parking.getURLimage(),
				parking.getNomProjet(),
				parking.getAdresse(),
				parking.getDescription(),
				parking.getLocalisation(),
				"modelParking",
				parking.getEtat(),
				parking.getSurface(),
				parking.getPrix(),
				parking.isLibre(),
				parking.getAnneeConstruction(),
				parking.getNombrePlaces(),
				parking.isCouvert()
		);
		p.setHidden(true);
		Repository.save(p);
	}
	public void addParking(Parking parking){
		Parking p = new Parking(
				parking.getURLimage(),
				parking.getNomProjet(),
				parking.getAdresse(),
				parking.getDescription(),
				parking.getLocalisation(),
				"Parking",
				parking.getEtat(),
				parking.getSurface(),
				parking.getPrix(),
				parking.isLibre(),
				parking.getAnneeConstruction(),
				parking.getNombrePlaces(),
				parking.isCouvert()
		);
		Repository.save(p);
	}
	public void addModelTerrain(ModelTerrain terrain){
		ModelTerrain t = new ModelTerrain(
				terrain.getURLimage(),
				terrain.getNomProjet(),
				terrain.getAdresse(),
				terrain.getDescription(),
				terrain.getLocalisation(),
				"modelTerrain",
				terrain.getEtat(),
				terrain.getSurface(),
				terrain.getPrix(),
				terrain.isLibre(),
				terrain.getAnneeConstruction(),
				terrain.getTypeTerrain(),
				terrain.isConstructible()
		);
		t.setHidden(true);
		Repository.save(t);
	}
	public void addTerrain(Terrain terrain){
		Terrain t = new Terrain(
				terrain.getURLimage(),
				terrain.getNomProjet(),
				terrain.getAdresse(),
				terrain.getDescription(),
				terrain.getLocalisation(),
				"Terrain",
				terrain.getEtat(),
				terrain.getSurface(),
				terrain.getPrix(),
				terrain.isLibre(),
				terrain.getAnneeConstruction(),
				terrain.getTypeTerrain(),
				terrain.isConstructible()
		);
		Repository.save(t);
	}
	public ArrayList<Typologie> getModel(){
		ArrayList<Typologie> models = new ArrayList<>();
		Repository.findAll().forEach(entity -> {
	        if (entity instanceof ModelAppartement) {
	           models.add((ModelAppartement) entity);
	        }
	        if (entity instanceof ModelVilla) {
	           models.add((ModelVilla) entity);
	        }
	        if (entity instanceof ModelFerme) {
	           models.add((ModelFerme) entity);
	        }
	        if (entity instanceof ModelMaison) {
	           models.add((ModelMaison) entity);
	        }
	        if (entity instanceof ModelParking) {
	           models.add((ModelParking) entity);
	        }
	        if (entity instanceof ModelTerrain) {
	           models.add((ModelTerrain) entity);
	        }
	    });
	    return models;
	}
	public ArrayList<Appartement> getAppartement(){
		ArrayList<Appartement> appartements = new ArrayList<>();
		Repository.findAll().forEach(entity -> {
	        if (entity instanceof Appartement) {
	        	if (!(entity instanceof ModelAppartement)) {
	        		appartements.add((Appartement) entity);
	        	}
	        }
	    });

	    return appartements;
	}
	public ArrayList<ModelAppartement> getModelAppartement(){
		ArrayList<ModelAppartement> appartements = new ArrayList<>();
		Repository.findAll().forEach(entity -> {
	        if (entity instanceof ModelAppartement) {
	            appartements.add((ModelAppartement) entity);
	        }
	    });

	    return appartements;
	}
	public ArrayList<Villa> getVilla(){
		ArrayList<Villa> villas = new ArrayList<>();
		Repository.findAll().forEach(entity -> {
	        if (entity instanceof Villa) {
	        	if (!(entity instanceof ModelVilla)) {
	        		villas.add((Villa) entity);
	        	}
	        }
	    });

	    return villas;
	}
	public ArrayList<ModelVilla> getModelVilla(){
		ArrayList<ModelVilla> villas = new ArrayList<>();
		Repository.findAll().forEach(entity -> {
	        if (entity instanceof ModelVilla) {
	            villas.add((ModelVilla) entity);
	        }
	    });

	    return villas;
	}
	public ArrayList<Ferme> getFerme(){
		ArrayList<Ferme> fermes = new ArrayList<>();
		Repository.findAll().forEach(entity -> {
	        if (entity instanceof Ferme) {
	        	if (!(entity instanceof ModelFerme)) {
	        		fermes.add((Ferme) entity);
	        	}
	            
	        }
	    });

	    return fermes;
	}
	public ArrayList<ModelFerme> getModelFerme(){
		ArrayList<ModelFerme> fermes = new ArrayList<>();
		Repository.findAll().forEach(entity -> {
	        if (entity instanceof ModelFerme) {
	            fermes.add((ModelFerme) entity);
	        }
	    });

	    return fermes;
	}
	public ArrayList<Maison> getMaison(){
		ArrayList<Maison> maisons = new ArrayList<>();
		Repository.findAll().forEach(entity -> {
	        if (entity instanceof Maison) {
	        	if (!(entity instanceof ModelMaison)) {
	        		maisons.add((Maison) entity);
	        	}
	            
	        }
	    });

	    return maisons;
	}
	public ArrayList<ModelMaison> getModelMaison(){
		ArrayList<ModelMaison> maisons = new ArrayList<>();
		Repository.findAll().forEach(entity -> {
	        if (entity instanceof ModelMaison) {
	            maisons.add((ModelMaison) entity);
	        }
	    });

	    return maisons;
	}
	public ArrayList<Parking> getParking(){
		ArrayList<Parking> parkings = new ArrayList<>();
		Repository.findAll().forEach(entity -> {
	        if (entity instanceof Parking) {
	        	if (!(entity instanceof ModelParking)) {
	        		parkings.add((Parking) entity);
	        	}
	            
	        }
	    });

	    return parkings;
	}
	public ArrayList<ModelParking> getModelParking(){
		ArrayList<ModelParking> parkings = new ArrayList<>();
		Repository.findAll().forEach(entity -> {
	        if (entity instanceof ModelParking) {
	            parkings.add((ModelParking) entity);
	        }
	    });

	    return parkings;
	}
	public ArrayList<Terrain> getTerrain(){
		ArrayList<Terrain> terrains = new ArrayList<>();
		Repository.findAll().forEach(entity -> {
	        if (entity instanceof Terrain) {
	        	if (!(entity instanceof ModelTerrain)) {
	        		terrains.add((Terrain) entity);
	        	}
	            
	        }
	    });

	    return terrains;
	}
	public ArrayList<ModelTerrain> getModelTerrain(){
		ArrayList<ModelTerrain> terrains = new ArrayList<>();
		Repository.findAll().forEach(entity -> {
	        if (entity instanceof ModelTerrain) {
	            terrains.add((ModelTerrain) entity);
	        }
	    });

	    return terrains;
	}
	public void delete(int id) {
    	Repository.deleteById(id);
    }
	public void updateHidden(int id) {
		Typologie caracteristiqueToUpdate = Repository.findById(id).get();
	    caracteristiqueToUpdate.toggleHidden();
	    Repository.save(caracteristiqueToUpdate);
	}
	public void update(Typologie ResidenceToUpdate , Typologie maison) {
		ResidenceToUpdate.setAdresse(maison.getAdresse());
		ResidenceToUpdate.setNomProjet(maison.getNomProjet());
		ResidenceToUpdate.setPrix(maison.getPrix());
		ResidenceToUpdate.setSurface(maison.getSurface());
		ResidenceToUpdate.setLocalisation(maison.getLocalisation());
		ResidenceToUpdate.setEtat(maison.getEtat());
		ResidenceToUpdate.setLibre(maison.isLibre());
		ResidenceToUpdate.setAnneeConstruction(maison.getAnneeConstruction());
		ResidenceToUpdate.setURLimage(maison.getURLimage());
		ResidenceToUpdate.setDescription(maison.getDescription());
	}
	public void updateAppartement(Appartement a,int id) {
		Appartement ResidenceToUpdate = (Appartement) Repository.findById(id).get();
		this.update(ResidenceToUpdate,a);
		ResidenceToUpdate.setNombreChambres(a.getNombreChambres());
		ResidenceToUpdate.setEtage(a.getEtage());
		Repository.save(ResidenceToUpdate);	
	}
	public void updateVilla(Villa a,int id) {
		Villa ResidenceToUpdate = (Villa) Repository.findById(id).get();
		this.update(ResidenceToUpdate,a);
		ResidenceToUpdate.setNombreChambres(a.getNombreChambres());
		ResidenceToUpdate.setSurfaceJardin(a.getSurfaceJardin());
		Repository.save(ResidenceToUpdate);	
	}
	public void updateFerme(Ferme a,int id) {
		Ferme ResidenceToUpdate = (Ferme) Repository.findById(id).get();
		this.update(ResidenceToUpdate,a);
		ResidenceToUpdate.setNombreAnimaux(a.getNombreAnimaux());
		ResidenceToUpdate.setTypeCulture(a.getTypeCulture());
		Repository.save(ResidenceToUpdate);	
	}
	public void updateMaison(Maison a,int id) {
		Maison ResidenceToUpdate = (Maison) Repository.findById(id).get();
		this.update(ResidenceToUpdate,a);
		ResidenceToUpdate.setNombrePieces(a.getNombrePieces());
		ResidenceToUpdate.setJardin(a.isJardin());
		Repository.save(ResidenceToUpdate);	
	}
	public void updateParking(Parking a,int id) {
		Parking ResidenceToUpdate = (Parking) Repository.findById(id).get();
		this.update(ResidenceToUpdate,a);
		ResidenceToUpdate.setNombrePlaces(a.getNombrePlaces());
		ResidenceToUpdate.setCouvert(a.isCouvert());
		Repository.save(ResidenceToUpdate);	
	}
	public void updateTerrain(Terrain a,int id) {
		Terrain ResidenceToUpdate = (Terrain) Repository.findById(id).get();
		this.update(ResidenceToUpdate,a);
		ResidenceToUpdate.setTypeTerrain(a.getTypeTerrain());
		ResidenceToUpdate.setConstructible(a.isConstructible());
		Repository.save(ResidenceToUpdate);	
	}
}

