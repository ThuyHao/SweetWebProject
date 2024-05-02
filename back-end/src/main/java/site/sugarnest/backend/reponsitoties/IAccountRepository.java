package site.sugarnest.backend.reponsitoties;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import site.sugarnest.backend.entities.AccountEntity;

import java.util.Optional;

@Repository
public interface IAccountRepository extends JpaRepository<AccountEntity, Integer> {

    Optional<AccountEntity> findByEmail(String email);

    Optional<AccountEntity> findByPhone(String phone);
}
