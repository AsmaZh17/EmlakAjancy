package EmlakAjancy.spring.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import EmlakAjancy.spring.entities.*;

@Repository
public interface UserRepository extends CrudRepository<User,Integer>{
	User findByEmail(String email);	
}

