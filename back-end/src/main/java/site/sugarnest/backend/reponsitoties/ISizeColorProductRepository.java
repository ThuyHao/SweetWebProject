package site.sugarnest.backend.reponsitoties;

import org.springframework.data.jpa.repository.JpaRepository;
import site.sugarnest.backend.entities.SizeColorProductEntity;

public interface ISizeColorProductRepository extends JpaRepository<SizeColorProductEntity, Long> {
}
