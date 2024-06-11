package site.sugarnest.backend.reponsitoties;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import site.sugarnest.backend.entities.RateEntity;

import java.util.Optional;

@Repository
public interface IRateRepository extends JpaRepository<RateEntity, Long> {
    Optional<RateEntity> findByAccountEntity_IdAndProductEntity_Id(Long accountId, Long productId);
}
