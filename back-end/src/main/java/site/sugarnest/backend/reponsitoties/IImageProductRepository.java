package site.sugarnest.backend.reponsitoties;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import site.sugarnest.backend.entities.ImageProductEntity;

@Repository
public interface IImageProductRepository extends JpaRepository<ImageProductEntity, Long> {
}
